exports.handler = async function () {
  const apiKey = process.env.LASTFM_API_KEY;
  const username = process.env.LASTFM_USERNAME;

  if (!apiKey || !username) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: "Last.fm environment variables are missing."
      })
    };
  }

  try {
    const params = new URLSearchParams({
      method: "user.getrecenttracks",
      user: username,
      api_key: apiKey,
      format: "json",

      // Grab an extra result just in case the currently-playing
      // track affects the returned count.
      limit: "4"
    });

    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error(`Last.fm returned ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.message || "Last.fm API error");
    }

    const recentTracks = data?.recenttracks?.track;

    if (!Array.isArray(recentTracks)) {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store"
        },
        body: JSON.stringify({
          username,
          tracks: []
        })
      };
    }

    const tracks = recentTracks.slice(0, 3).map(track => {
      const nowPlaying =
        track["@attr"]?.nowplaying === "true";

      const images = Array.isArray(track.image)
        ? track.image
        : [];

      const albumArt =
        images.find(image => image.size === "extralarge")?.["#text"] ||
        images.find(image => image.size === "large")?.["#text"] ||
        "";

      return {
        name: track.name || "Unknown Track",
        artist: track.artist?.["#text"] || "Unknown Artist",
        album: track.album?.["#text"] || "",
        url: track.url || "",
        albumArt,
        nowPlaying,

        // Completed scrobbles include a Unix timestamp.
        // A currently-playing track normally does not.
        timestamp:
          !nowPlaying && track.date?.uts
            ? Number(track.date.uts) * 1000
            : null
      };
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      },
      body: JSON.stringify({
        username,
        tracks
      })
    };
  } catch (error) {
    console.error("Last.fm function error:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: "Could not load recent Last.fm tracks."
      })
    };
  }
};

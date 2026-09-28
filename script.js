// ======================================================
// RAVEN PORTFOLIO
// Edit the data below to update the site later.
// ======================================================

const PROJECTS = [
  {
    title: "TF2 Map Picker",
    type: "Discord Bot",
    icon: "🤖",
    status: "ACTIVE",
    featured: false,
    description:
      "A Discord bot I made for picking random Team Fortress 2 maps and modes, including seasonal and less-common official modes.",
    tags: ["JavaScript", "Discord.js", "TF2"],
    note: "Source code currently private.",
    links: [
      // Add an invite/project link here later if you want.
    ]
  },

  {
    title: "Commission Manager",
    type: "Discord Bot",
    icon: "🧾",
    status: "IN DEVELOPMENT",
    featured: false,
    description:
      "A Discord bot for keeping creator commissions organized, including commission status, deadlines, and creator/client workflow.",
    tags: ["TypeScript", "Discord.js", "PostgreSQL"],
    note: "Currently in development.",
    links: [
      // Add a public link here later.
    ]
  },

  {
    title: "Game Night Roulette",
    type: "Web App",
    icon: "🎲",
    status: "LIVE",
    featured: true,
    image: "game-night-roulette.png",
    description:
      "A game picker I built for deciding what to play. It supports custom game libraries, Steam login and import, group-size filters, playtime, and live Steam player counts.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Netlify",
      "Steam API"
    ],
    links: [
      {
        label: "open website",
        url: "https://ellipticbean.netlify.app/",
        primary: true
      }
    ]
  }
];
const LINK_GROUPS = [
  {
    title: "🎮 gaming",
    description: "where a concerning amount of my free time goes",
    links: [
      {
        label: "Steam",
        url: "https://steamcommunity.com/profiles/76561199510055878/"
      }
    ]
  },

  {
  title: "🌐 socials / media",
  description: "places where I save, rate, build, or hoard things",
  links: [
    {
      label: "GitHub",
      url: "https://github.com/ellipticbean"
    },
    {
      label: "Pinterest",
      url: "https://www.pinterest.com/ellipticbean/_profile/"
    },
    {
      label: "Letterboxd",
      url: "https://letterboxd.com/ellipticbean/"
    }
  ]
},

  {
    title: "🧠 assorted me-data",
    description: "because apparently one personality test wasn't enough",
    links: [
      {
        label: "MBTI • ISTP-T",
        url: "https://www.16personalities.com/profiles/istp-t/f/gb2f1v2nj"
      },
      {
        label: "Enneagram • Type 5",
        url: "https://www.enneagraminstitute.com/type-5/"
      },
      {
        label: "Big Five",
        url: "https://bigfive-test.com/result/695d3d794093453bd0910947"
      }
    ]
  },

  {
    title: "☕ support",
    description: "completely optional, but very appreciated",
    links: [
      {
        label: "Buy Me a Coffee",
        url: "https://buymeacoffee.com/ellipticbean"
      }
    ]
  }
];

const MUSIC_LINKS = [
  {
    label: "Spotify",
    url: "https://open.spotify.com/user/31qbuyiwq4mnenczscz2ideyb5fe"
  },
  {
    label: "Last.fm",
    url: "https://www.last.fm/user/MintyCorpse"
  },
  {
    label: "Discogs",
    url: "https://www.discogs.com/user/ellipticbean"
  }
];

// ======================================================
// ROUTING
// ======================================================

const pages = [...document.querySelectorAll(".page")];
const navLinks = [...document.querySelectorAll("[data-route]")];

function showPage(route) {
  const safeRoute = ["home", "projects", "links", "music"].includes(route)
    ? route
    : "home";

  pages.forEach(page => {
    page.classList.toggle("active", page.id === safeRoute);
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.route === safeRoute);
  });

  window.scrollTo({ top: 0, behavior: "instant" });
}

function routeFromHash() {
  return window.location.hash.replace("#", "") || "home";
}

window.addEventListener("hashchange", () => {
  showPage(routeFromHash());
});

// ======================================================
// PROJECTS
// ======================================================

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.innerHTML = "";

  PROJECTS.forEach(project => {
    const card = document.createElement("article");
    card.className = `project-card${project.featured ? " featured" : ""}`;

    const actionLinks = project.links
      .map(link => {
        const cls = link.primary ? "project-link primary" : "project-link";
        return `<a class="${cls}" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`;
      })
      .join("");

    card.innerHTML = `
  <div class="project-card-head">
    <h3>${project.icon} ${project.title}</h3>
    <span class="status-pill">${project.status}</span>
  </div>

  ${
    project.image
      ? `<div class="project-preview">
           <img
             src="${project.image}"
             alt="${project.title} screenshot"
             loading="lazy"
           >
         </div>`
      : ""
  }

  <div class="project-body">
    <p class="project-type">${project.type}</p>
    <p class="project-description">${project.description}</p>

    <div class="project-tags">
      ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
    </div>

    ${
      actionLinks
        ? `<div class="project-actions">${actionLinks}</div>`
        : `<p><small>${project.note || "No public link available."}</small></p>`
    }
  </div>
`;
    grid.appendChild(card);
  });
}

// ======================================================
// LINKS
// ======================================================

function makeLinkButton(link) {
  if (!link.url) {
    return `<span class="link-button disabled">${link.label} • add URL later</span>`;
  }

  return `<a class="link-button" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`;
}

function renderLinkGroups() {
  const root = document.getElementById("linkGroups");
  if (!root) return;

  root.innerHTML = LINK_GROUPS.map(group => `
    <section class="link-group">
      <h3>${group.title}</h3>

      <div class="link-group-body">
        <p class="link-group-description">${group.description}</p>

        <div class="link-stack">
          ${group.links.map(makeLinkButton).join("")}
        </div>
      </div>
    </section>
  `).join("");
}

function renderMusicLinks() {
  const root = document.getElementById("musicLinks");
  if (!root) return;

  root.innerHTML = MUSIC_LINKS.map(makeLinkButton).join("");
}
// ======================================================
// LAST.FM LIVE FEED
// ======================================================

const LASTFM_REFRESH_INTERVAL = 60 * 1000;

function escapeLastfmHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatLastfmTime(timestamp) {
  if (!timestamp) {
    return "";
  }

  const date = new Date(timestamp);

  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}

function renderLastfmTracks(tracks) {
  const feed = document.getElementById("lastfmFeed");

  if (!feed) return;

  if (!Array.isArray(tracks) || tracks.length === 0) {
    feed.innerHTML = `
      <p class="lastfm-error">
        No recent tracks found.
      </p>
    `;
    return;
  }

  feed.innerHTML = tracks.map((track, index) => {
    const title = escapeLastfmHtml(track.name);
    const artist = escapeLastfmHtml(track.artist);
    const album = escapeLastfmHtml(track.album);
    const url = escapeLastfmHtml(track.url);
    const albumArt = escapeLastfmHtml(track.albumArt);

    const timeText = track.nowPlaying
      ? "NOW PLAYING"
      : formatLastfmTime(track.timestamp);

    const statusClass = track.nowPlaying
      ? "now-playing"
      : "";

    const number = String(index + 1).padStart(2, "0");

    return `
      <a
        class="lastfm-track ${statusClass}"
        href="${url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="lastfm-number">
          ${track.nowPlaying ? "▶" : number}
        </div>

        ${
          albumArt
            ? `
              <img
                class="lastfm-art"
                src="${albumArt}"
                alt=""
                loading="lazy"
              >
            `
            : `
              <div class="lastfm-art lastfm-art-empty">
                ♪
              </div>
            `
        }

        <div class="lastfm-track-info">
          <div class="lastfm-track-top">
            <strong>${title}</strong>

            <span class="lastfm-time ${statusClass}">
              ${timeText}
            </span>
          </div>

          <span class="lastfm-artist">
            ${artist}
          </span>

          ${
            album
              ? `<span class="lastfm-album">${album}</span>`
              : ""
          }
        </div>
      </a>
    `;
  }).join("");
}

async function loadLastfmTracks() {
  const feed = document.getElementById("lastfmFeed");
  const updated = document.getElementById("lastfmUpdated");
  const refreshButton = document.getElementById("refreshLastfm");

  if (!feed) return;

  if (refreshButton) {
    refreshButton.disabled = true;
    refreshButton.textContent = "↻ checking...";
  }

  try {
    const response = await fetch(
  "/api/lastfm",
  {
    cache: "no-store"
  }
);

    if (!response.ok) {
      throw new Error(
        `Last.fm returned ${response.status}`
      );
    }

    const data = await response.json();

    renderLastfmTracks(data.tracks);

    if (updated) {
      updated.textContent =
        `updated ${new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit"
        })}`;
    }
  } catch (error) {
    console.error("Last.fm feed error:", error);

    feed.innerHTML = `
      <p class="lastfm-error">
        couldn't reach Last.fm right now :(
      </p>
    `;

    if (updated) {
      updated.textContent = "connection failed";
    }
  } finally {
    if (refreshButton) {
      refreshButton.disabled = false;
      refreshButton.textContent = "↻ refresh";
    }
  }
}
// ======================================================
// INITIALIZE
// ======================================================

document.getElementById("year").textContent = new Date().getFullYear();

renderProjects();
renderLinkGroups();
renderMusicLinks();
showPage(routeFromHash());
loadLastfmTracks();

setInterval(
  loadLastfmTracks,
  LASTFM_REFRESH_INTERVAL
);

document
  .getElementById("refreshLastfm")
  ?.addEventListener(
    "click",
    loadLastfmTracks
  );
async function loadSteamStatus() {
  const playingElement =
    document.getElementById("steam-playing");

  if (!playingElement) {
    return;
  }

  try {
    const response = await fetch(
      "/api/steam-status",
      {
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error(
        `Steam returned ${response.status}`
      );
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    playingElement.textContent =
      data.display || "nothing";

  } catch (error) {
    console.error(
      "Steam status failed:",
      error
    );

    playingElement.textContent =
      "unavailable";
  }
}

loadSteamStatus();

setInterval(
  loadSteamStatus,
  60000
);

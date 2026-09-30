// ======================================================
// RAVEN PORTFOLIO
// Edit the data below to update the site later.
// ======================================================
/*
========================================================
NEW PROJECT TEMPLATE
Copy this whole object and paste it inside PROJECTS.
Then change the values.
========================================================

{
  title: "PROJECT NAME",

  type: "Discord Bot",

  group: "Bots",

  category: "Gaming",

  icon: "🤖",

  status: "IN DEVELOPMENT",

  featured: false,

  image: "project-image.png",

  description:
    "Describe what the project does here.",

  tags: [
    "JavaScript",
    "Discord.js"
  ],

  note: "Currently in development.",

  links: [
    {
      label: "open website",
      url: "https://example.com/",
      primary: true
    }
  ]
},

GROUP EXAMPLES:
"Bots"
"Websites"
"Other Projects"

CATEGORY EXAMPLES:
"Gaming"
"Organization"
"Utility"
"Gaming Tools"
"Creative"
"Browser Extensions"
"Scripts & Automation"
"Experiments"

STATUS EXAMPLES:
"ACTIVE"
"LIVE"
"IN DEVELOPMENT"
"PAUSED"
"ARCHIVED"

If there is no public link yet, use:

links: [
  // Add a public link later.
]

========================================================
*/
const PROJECTS = [
  {
    title: "TF2 Map Picker",
    type: "Discord Bot",
    group: "Bots",
    category: "Gaming",
    icon: "🤖",
    status: "ACTIVE",
    featured: false,
    image: "tf2-map-picker-preview-v2.png",

    description:
      "A Discord bot I made for picking random Team Fortress 2 maps and modes, including seasonal and less-common official modes.",

    tags: [
      "TypeScript",
      "Discord.js",
      "TF2",
      "RNG"
    ],

    note: "Source code currently private.",

    links: [
      {
        label: "how to use",
        url: "tf2-map-picker-guide.html",
        primary: true
      },
      {
        label: "add to Discord",
        url: "https://discord.com/oauth2/authorize?client_id=1553074819346595840&permissions=84992&integration_type=0&scope=bot+applications.commands",
        primary: false
      }
    ]
  },

  {
    title: "Commission Manager",
    type: "Discord Bot",
    group: "Bots",
    category: "Organization",
    icon: "🧾",
    status: "ACTIVE",
    featured: false,
    image: "commission-manager-preview.png",
    description:
      "A Discord bot for keeping creator commissions organized, including commission status, deadlines, and creator/client workflow.",
    tags: [
      "TypeScript",
      "Discord.js",
      "PostgreSQL"
    ],
    links: [
      {
        label: "Add Bot",
        url: "https://discord.com/oauth2/authorize?client_id=1553533744936259654",
        primary: true
      },
      {
        label: "View Guide",
        url: "https://ellipticbean.github.io/raven-portfolio/creator-commission-manager/"
      }
    ]
  },

  {
    title: "Game Night Roulette",
    type: "Web App",
    group: "Websites",
    category: "Gaming Tools",
    icon: "🎲",
    status: "LIVE",
    featured: true,
    image: "game-night-roulette-preview.png",
    description:
      "A game picker I built for deciding what to play. It supports custom game libraries, Steam login and import, group-size filters, playtime, and live Steam player counts.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Cloudflare Workers",
      "Steam API",
      "RNG"
    ],
    links: [
      {
        label: "open website",
        url: "https://game-night-roulette.ellipticbean.workers.dev/",
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
  const safeRoute = ["home", "about", "projects", "links", "music"].includes(route)
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

const PROJECT_GROUP_ORDER = [
  "Bots",
  "Websites",
  "Other Projects"
];

const PROJECT_GROUP_INFO = {
  Bots: {
    icon: "🤖",
    description: "Discord bots, automation, and tiny digital assistants."
  },

  Websites: {
    icon: "🌐",
    description: "Web apps, browser tools, and sites I've built."
  },

  "Other Projects": {
    icon: "🧪",
    description: "Scripts, APIs, experiments, games, mods, and miscellaneous creations."
  }
};

let currentProjectGroup = null;
let currentProjectCategory = null;


function projectCountText(count) {
  return `${count} ${count === 1 ? "project" : "projects"}`;
}


function createProjectCard(project) {
  const card = document.createElement("article");

  card.className =
    `project-card${project.featured ? " featured" : ""}`;

  const actionLinks = project.links
    .map(link => {
      const cls =
        link.primary
          ? "project-link primary"
          : "project-link";

      return `
        <a
          class="${cls}"
          href="${link.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${link.label}
        </a>
      `;
    })
    .join("");

  card.innerHTML = `
    <div class="project-card-head">
      <h3>${project.icon} ${project.title}</h3>

      <span class="status-pill">
        ${project.status}
      </span>
    </div>

    ${project.image
      ? `
          <div class="project-preview">
            <img
              src="${project.image}"
              alt="${project.title} screenshot"
              loading="lazy"
            >
          </div>
        `
      : ""
    }

    <div class="project-body">

      <p class="project-type">
        ${project.type}
      </p>

      <p class="project-description">
        ${project.description}
      </p>

      <div class="project-tags">
        ${project.tags
      .map(tag => `<span>${tag}</span>`)
      .join("")}
      </div>

      ${actionLinks
      ? `
            <div class="project-actions">
              ${actionLinks}
            </div>
          `
      : `
            <p>
              <small>
                ${project.note || "No public link available."}
              </small>
            </p>
          `
    }

    </div>
  `;

  return card;
}


function createProjectFolder(title, description, count, icon, onClick) {
  const folder = document.createElement("button");

  folder.type = "button";
  folder.className = "project-folder";

  folder.innerHTML = `
    <div class="project-folder-titlebar">
      <span>📁 ${title}</span>
      <span aria-hidden="true">□ ─ ×</span>
    </div>

    <div class="project-folder-body">

      <div class="project-folder-icon">
        ${icon}
      </div>

      <div>
        <h3>${title}</h3>

        <p>
          ${description}
        </p>

        <span class="project-folder-count">
          ${projectCountText(count)}
        </span>
      </div>

    </div>
  `;

  folder.addEventListener("click", onClick);

  return folder;
}


function createProjectNavigation(backText, path, onBack) {
  const navigation = document.createElement("div");

  navigation.className = "project-folder-navigation";

  navigation.innerHTML = `
    <button
      type="button"
      class="project-folder-back"
    >
      ← ${backText}
    </button>

    <span class="project-folder-path">
      ${path}
    </span>
  `;

  navigation
    .querySelector(".project-folder-back")
    .addEventListener("click", onBack);

  return navigation;
}


function renderProjectGroups(grid) {
  const groupsInUse = [
    ...new Set(
      PROJECTS.map(
        project => project.group || "Other Projects"
      )
    )
  ];

  const groups = [
    ...PROJECT_GROUP_ORDER.filter(
      group => groupsInUse.includes(group)
    ),

    ...groupsInUse.filter(
      group => !PROJECT_GROUP_ORDER.includes(group)
    )
  ];

  groups.forEach(groupName => {
    const projects = PROJECTS.filter(
      project =>
        (project.group || "Other Projects") === groupName
    );

    if (projects.length === 0) return;

    const categories = [
      ...new Set(
        projects.map(
          project => project.category || "Miscellaneous"
        )
      )
    ];

    const info =
      PROJECT_GROUP_INFO[groupName] || {
        icon: "📦",
        description: "Projects and experiments."
      };

    const folder = createProjectFolder(
      groupName,
      `${info.description} ${categories.join(" • ")}`,
      projects.length,
      info.icon,

      () => {
        currentProjectGroup = groupName;
        currentProjectCategory = null;

        renderProjects();
      }
    );

    grid.appendChild(folder);
  });
}


function renderProjectCategories(grid) {
  const projects = PROJECTS.filter(
    project =>
      (project.group || "Other Projects") ===
      currentProjectGroup
  );

  const navigation = createProjectNavigation(
    "Projects",

    `C:\\Users\\Raven\\Projects\\${currentProjectGroup}`,

    () => {
      currentProjectGroup = null;
      currentProjectCategory = null;

      renderProjects();
    }
  );

  grid.appendChild(navigation);

  const categories = [
    ...new Set(
      projects.map(
        project => project.category || "Miscellaneous"
      )
    )
  ].sort();

  categories.forEach(category => {
    const categoryProjects = projects.filter(
      project =>
        (project.category || "Miscellaneous") === category
    );

    let icon = "🧪";

    if (currentProjectGroup === "Bots") {
      icon = "🤖";
    }

    if (currentProjectGroup === "Websites") {
      icon = "🌐";
    }

    const folder = createProjectFolder(
      category,
      `${projectCountText(categoryProjects.length)} in this folder.`,
      categoryProjects.length,
      icon,

      () => {
        currentProjectCategory = category;

        renderProjects();
      }
    );

    grid.appendChild(folder);
  });
}


function renderProjectCards(grid) {
  const navigation = createProjectNavigation(
    currentProjectGroup,

    `C:\\Users\\Raven\\Projects\\${currentProjectGroup}\\${currentProjectCategory}`,

    () => {
      currentProjectCategory = null;

      renderProjects();
    }
  );

  grid.appendChild(navigation);

  const projects = PROJECTS.filter(project => {
    const group =
      project.group || "Other Projects";

    const category =
      project.category || "Miscellaneous";

    return (
      group === currentProjectGroup &&
      category === currentProjectCategory
    );
  });

  projects.forEach(project => {
    grid.appendChild(
      createProjectCard(project)
    );
  });
}

function getProjectSearchResults(query) {
  const search = query
    .trim()
    .toLowerCase();

  if (!search) {
    return [];
  }

  return PROJECTS.filter(project => {
    const searchableText = [
      project.title,
      project.type,
      project.group,
      project.category,
      project.description,
      ...(project.tags || [])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(search);
  });
}


function renderProjectSearch(grid, query) {
  const results =
    getProjectSearchResults(query);

  if (results.length === 0) {
    grid.innerHTML = `
      <div class="project-search-empty">
        <strong>No projects found.</strong>
        <span>Try another name, tag, or category.</span>
      </div>
    `;

    return;
  }

  results.forEach(project => {
    grid.appendChild(
      createProjectCard(project)
    );
  });
}
function renderRecentProjects() {
  const root =
    document.getElementById("recentProjects");

  if (!root) return;

  /*
    The last 3 projects in PROJECTS
    are treated as the newest.
  */
  const recentProjects = [
    ...PROJECTS
  ]
    .slice(-3)
    .reverse();

  root.innerHTML = "";

  recentProjects.forEach(project => {
    const card =
      document.createElement("button");

    card.type = "button";
    card.className =
      "recent-project-card";

    card.innerHTML = `
      <div class="recent-project-top">

        <span class="recent-project-icon">
          ${project.icon}
        </span>

        <span class="recent-project-status">
          ${project.status}
        </span>

      </div>

      <strong>
        ${project.title}
      </strong>

      <span class="recent-project-location">
        ${project.group} / ${project.category}
      </span>

      <p>
        ${project.description}
      </p>

      <span class="recent-project-open">
        open project →
      </span>
    `;

    card.addEventListener(
      "click",
      () => {
        currentProjectGroup =
          project.group ||
          "Other Projects";

        currentProjectCategory =
          project.category ||
          "Miscellaneous";

        window.location.hash =
          "projects";

        renderProjects();
      }
    );

    root.appendChild(card);
  });
}
function renderProjects() {
  const grid =
    document.getElementById("projectGrid");

  if (!grid) return;

  grid.innerHTML = "";
  const searchInput =
    document.getElementById("projectSearch");

  const searchQuery =
    searchInput?.value || "";

  if (searchQuery.trim()) {
    renderProjectSearch(
      grid,
      searchQuery
    );

    return;
  }
  // Main project folders
  if (!currentProjectGroup) {
    renderProjectGroups(grid);
    return;
  }

  // Categories inside Bots / Websites / etc.
  if (!currentProjectCategory) {
    renderProjectCategories(grid);
    return;
  }

  // Individual project cards
  renderProjectCards(grid);
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

        ${albumArt
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

          ${album
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
      "https://raven.ellipticbean.workers.dev/api/lastfm",
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
renderRecentProjects();
renderLinkGroups();
renderMusicLinks();
showPage(routeFromHash());
loadLastfmTracks();
document
  .getElementById("projectSearch")
  ?.addEventListener(
    "input",
    () => {
      renderProjects();
    }
  );
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
      "https://raven.ellipticbean.workers.dev/api/steam-status",
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

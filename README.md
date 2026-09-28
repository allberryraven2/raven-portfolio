# Raven Portfolio

Personal portfolio and links site for my projects, profiles, music, and other internet stuff.

## Live Site

https://raven.ellipticbean.workers.dev

## Project Structure

- `index.html` — page structure and sections
- `style.css` — retro desktop-inspired styling
- `script.js` — navigation, project/link data, and Last.fm feed

## Hosting

The site is stored in GitHub and published through GitHub Pages.

GitHub Pages:
https://ellipticbean.github.io/raven-portfolio/

A Cloudflare Worker proxies the site and provides the public URL:

https://raven.ellipticbean.workers.dev

## Last.fm Feed

The Music page shows my latest three Last.fm scrobbles, including:

- song title
- artist
- album
- album artwork
- listening time
- currently playing status

The portfolio requests this through:

`/api/lastfm`

The Cloudflare Worker handles the Last.fm API request so the API key is never exposed in the public website code.

## Editing

Most portfolio content can be changed in `script.js`.

### Projects

Edit the `PROJECTS` array.

### Links

Edit the `LINK_GROUPS` array.

### Music Links

Edit the `MUSIC_LINKS` array.

The main page text and Music page structure are in `index.html`.

Styling is in `style.css`.

## Projects Currently Featured

- TF2 Map Picker
- Commission Manager
- Game Night Roulette

More projects can be added later through the `PROJECTS` array.

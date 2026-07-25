# adithramamurti.com

Static site, no build step — plain HTML/CSS/JS, safe for GitHub Pages.

## Structure

```
index.html          Home
professional.html   Employment, education, publications, projects
music.html           Inner Workings (Bandcamp embed + tracklist)
css/style.css        All styles / design tokens
js/wave.js            Ambient hero wave animation
images/               Add profile.jpg here (referenced by index.html)
```

## Before you deploy

1. Drop a photo at `images/profile.jpg` (used on the home page `About` section).
   Any reasonably-sized JPG/PNG works — the CSS caps it to a 200px-wide frame.
2. Double check the Cadence Design Systems start date, and the NRL end date
   (currently set to Jun 2026 to match) in `professional.html`.
3. If you want the full/updated publication list to live directly on the
   page instead of linking out to Google Scholar, just let me know and I can
   pull specific entries in — Scholar itself blocks automated scraping, so I
   couldn't pull your sparse linear algebra papers automatically.

## Deploying to GitHub Pages

If this is going in its own repo (e.g. `aramamurti/aramamurti.github.io` or
a repo with Pages enabled):

```bash
git init
git add .
git commit -m "New site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Then in the repo's **Settings → Pages**, set the source branch to `main`
(root folder). If you're using a custom domain, add a `CNAME` file containing
just your domain, e.g.:

```
www.ramamurti.com
```

and make sure your DNS has the appropriate `A`/`ALIAS`/`CNAME` records
pointing at GitHub Pages (unchanged if you're already doing this today).

If this needs to live at a *subpath* of an existing site (e.g.
`ramamurti.com/adith`, like before) rather than the repo root, just drop
these files into that subfolder of whatever repo currently serves
`ramamurti.com` — no path changes needed since all links here are relative.

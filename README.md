# Ruebok

Static one-page site for Ruebok — video production for business.

Plain HTML/CSS/JS, no build step. Deployed on Vercel (`vercel.json` serves the
repo root directly).

## Structure

- `index.html` — the entire site (styles and script are inline)
- `videos/` — web-optimized 1080p clips + `posters/` still frames
- `vercel.json` — static hosting config (no build)

## Local preview

Any static file server works, e.g.:

```bash
python3 -m http.server 8123
```

Then open http://localhost:8123

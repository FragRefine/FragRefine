# FragRefine Project Page

Static project website for **FragRefine: Advantage-Guided Parallel Fragment Refinement for Physics-Based Dexterous Retargeting** (double-blind anonymous release).

Live site: https://fragrefine.github.io/FragRefine/

## Structure

- `index.html` — Static single-page layout (bilingual `EN / 中文`, showcase, filterable rollout gallery, framework overview, BibTeX)
- `styles.css` — Responsive light-mode academic styling
- `app.js` — Client-side gallery filtering, video/stroboscopic toggle, keyframe switchers, lightbox inspection, and `EN / 中文` localization
- `assets/videos/` — Pure-physics MuJoCo rollout videos (`macro/` and `micro/`)
- `assets/posters/` — First-frame video posters
- `assets/stroboscopic/` — 4-frame multi-stage strips (`macro/`) and motion-trail overlays (`micro/`)
- `assets/figures/` — Method overview and architecture diagrams (`overview.png`, `advantage.png`, `refinement.png`)
- `assets/data/gallery_manifest.{json,js}` — Gallery metadata loaded by the static page

## Local Preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser (append `?lang=zh` for Chinese).

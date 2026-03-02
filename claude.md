# Project: My Portfolio — Claude Notes

Summary:

This repository contains a small React + Tailwind (Vite) portfolio site for Tushar Sharma built from provided resume content. The site displays contact info, summary, education, skills, achievements, projects, and coding profiles.

Local development commands:

```bash
npm install
npm run dev
```

What to ask Claude (suggested prompts):

- "Improve the Professional Summary to be more concise and impactful for internship applications."
- "Convert the achievements bullets into a LinkedIn-ready summary paragraph."
- "Suggest 3 alternate project descriptions for WatchMate emphasizing backend design and Django ORM usage."
- "Rewrite the Skills section into a one-line technical summary suitable for a resume header."

Deployment notes:

- This is a static frontend; you can deploy with Vercel or Netlify. If you later add server-side Django for the WatchMate project, deploy backend separately (e.g., Render or Heroku) and point the frontend links accordingly.

Files of interest:

- `src/data/resume.js`: primary content source for the site.
- `src/components/*`: UI components.
- `index.html` and `tailwind.config.cjs`: build and styling setup.

Editing guidance for Claude:

When asking Claude to change content, reference the location in `src/data/resume.js` and request exact text replacements or variants. For UI changes, ask for a suggested JSX diff and I can apply it.

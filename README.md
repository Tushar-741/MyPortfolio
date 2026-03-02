# My Portfolio (React + Tailwind)

A modern, production-ready portfolio website built with React, Vite, and Tailwind CSS.

## Quick Start

### Prerequisites
- Node.js 20.0.0 or higher (see `.nvmrc` for exact version)
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

## Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## Deployment on Netlify

This project is configured for **zero-friction deployment** on Netlify. No additional configuration needed!

### Option 1: Deploy via Git (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Production ready portfolio"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your GitHub repository
   - Netlify will auto-detect:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Automatic Deployments**
   - Every push to `main` branch automatically deploys
   - Preview builds for pull requests
   - Rollback to previous versions anytime

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI (one time only)
npm install -g netlify-cli

# Authenticate with Netlify (one time only)
netlify login

# Deploy from local machine
netlify deploy --prod
```

### Option 3: Drag and Drop Deploy

1. Run `npm run build` locally
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder onto the deploy zone
4. Your site is live!

## Configuration Files

- **`netlify.toml`** - Netlify deployment settings (build command, publish directory, redirects, caching, security headers)
- **`.nvmrc`** - Node version specification (ensures consistent builds)
- **`vite.config.js`** - Vite build optimization (minification, code splitting, routing)
- **`.gitignore`** - What NOT to commit to version control

## Performance & Security

✅ **Production Optimizations:**
- Terser minification for smallest bundle size
- Automatic code splitting with vendor chunks
- Responsive caching headers for assets
- SPA routing configured for single-page apps

✅ **Security Headers:**
- X-Frame-Options (clickjacking protection)
- X-Content-Type-Options (MIME sniffing prevention)
- X-XSS-Protection (XSS attack prevention)
- Referrer-Policy (privacy focused)

## Customization

- **Edit content:** Update `src/data/resume.js`
- **Modify styling:** Edit `tailwind.config.cjs` or `src/index.css`
- **Change colors/theme:** See Tailwind config and component files in `src/components/`

## Environment Variables

To add environment variables (optional):
1. Create a `.env` file locally (not committed)
2. In Netlify dashboard → Site settings → Build & deploy → Environment → add variables

Example:
```
VITE_API_URL=https://api.example.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Troubleshooting

**Build fails on Netlify?**
- Check `.nvmrc` matches your local Node version
- Ensure all dependencies in `package.json` are correct
- Run `npm run build` locally to test

**Site shows old content after deploy?**
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
- Check "Clear cache and do a fresh deploy" in Netlify dashboard

**Custom domain?**
- Netlify dashboard → Site settings → Domain management → Add custom domain
- Follow DNS instructions from your domain registrar

## Next Steps

1. Update content in `src/data/resume.js`
2. Test locally: `npm run dev`
3. Build and test: `npm run build && npm run preview`
4. Push to GitHub and connect to Netlify
5. Live! 🚀

## Useful Links

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Netlify Documentation](https://docs.netlify.com/)


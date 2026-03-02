# Netlify Deployment Quick Reference

## 🚀 Quick Deploy (5 minutes)

### Step 1: Push Code to GitHub
```bash
git add .
git commit -m "Production ready: add Netlify config"
git push origin main
```

### Step 2: Connect to Netlify
- Go to https://app.netlify.com
- Click "New site from Git"
- Select your GitHub repo
- Netlify auto-detects all settings from `netlify.toml`
- Click "Deploy"

### Done! Your site is live 🎉

---

## 📋 What's Included

- ✅ **netlify.toml** - Zero-config deployment
- ✅ **.nvmrc** - Node version consistency
- ✅ **vite.config.js** - Production optimizations
- ✅ **Automatic caching** - Fast repeated loads
- ✅ **Security headers** - OWASP recommendations
- ✅ **SPA routing** - Client-side navigation works
- ✅ **Automatic deployments** - Every git push
- ✅ **Preview branches** - Test PRs before merge

---

## 🔧 Useful Netlify Commands

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from CLI
netlify deploy --prod

# Check deployment status
netlify status

# Open your site
netlify open
```

---

## 📊 Build & Deploy Info

- **Build Command:** `npm run build`
- **Publish Directory:** `dist/`
- **Node Version:** 20.0.0
- **Build Time:** ~30 seconds
- **Cache Strategy:** Assets cached 1 year, HTML not cached

---

## 🔑 Environment Variables (if needed)

1. Go to Netlify dashboard
2. Site settings → Build & deploy → Environment
3. Add key-value pairs
4. Reference in code: `import.meta.env.VITE_*`

---

## ❌ Troubleshooting

**Build fails?**
- Check local build: `npm run build`
- Verify Node version: `node --version`

**Site shows old content?**
- Clear browser cache: `Cmd+Shift+R` (Mac) / `Ctrl+Shift+R` (Windows)
- Netlify dashboard → "Trigger deploy" → "Deploy site"

**Need to rollback?**
- Netlify dashboard → Deploys → click older deploy → "Publish deploy"

---

## 📚 More Help

- Netlify Docs: https://docs.netlify.com/
- Build config docs: https://docs.netlify.com/configure-builds/overview/
- Vite docs: https://vitejs.dev/

# ✅ Production Readiness Checklist

## Before Deploying

- [ ] Update portfolio content in `src/data/resume.js`
- [ ] Test locally: `npm run dev`
- [ ] Build locally: `npm run build`
- [ ] Preview build: `npm run preview`
- [ ] Check all links work correctly
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Update SEO meta tags in `index.html` if needed

## Deployment Setup

- [x] `netlify.toml` - Netlify configuration created
- [x] `.nvmrc` - Node version pinned to 20.0.0
- [x] `vite.config.js` - Build optimizations configured
- [x] `package.json` - Scripts and dependencies updated
- [x] `.env.example` - Environment variables template
- [x] `.gitignore` - Production rules added

## Deploy to Netlify

### Option A: Git-based Deploy (Recommended)
- [ ] Push code to GitHub: `git push origin main`
- [ ] Go to https://app.netlify.com
- [ ] Click "New site from Git"
- [ ] Select your repository
- [ ] Click "Deploy site"
- [ ] Wait for green checkmark ✓
- [ ] Visit your live site

### Option B: CLI Deploy
- [ ] Install: `npm install -g netlify-cli`
- [ ] Login: `netlify login`
- [ ] Deploy: `netlify deploy --prod`

### Option C: Drag & Drop
- [ ] Run `npm run build`
- [ ] Go to https://app.netlify.com/drop
- [ ] Drag the `dist` folder
- [ ] Done!

## Post-Deployment

- [ ] Visit live site URL
- [ ] Check all pages load correctly
- [ ] Test navigation works
- [ ] Verify links are not broken
- [ ] Check mobile responsiveness
- [ ] View Network tab (should show cached assets)
- [ ] Test on different devices and browsers

## Ongoing Maintenance

- [ ] Netlify auto-deploys on every `git push`
- [ ] Set up custom domain in Netlify dashboard (optional)
- [ ] Enable HTTPS (automatic by Netlify)
- [ ] Configure automatic branch previews in Netlify dashboard (optional)
- [ ] Monitor build logs in Netlify dashboard
- [ ] Set up email notifications for failed deploys (optional)

## Useful Commands

```bash
# Local development
npm run dev          # Start dev server
npm run build        # Create production build
npm run preview      # Preview the production build

# Netlify CLI (if using Option B)
npm install -g netlify-cli
netlify login
netlify deploy --prod
netlify open
```

## Build Info

- **Build command:** `npm run build`
- **Publish directory:** `dist/`
- **Estimated build time:** ~2 seconds
- **Expected bundle size:** ~150 KB (uncompressed), ~50 KB (gzipped)

## Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails on Netlify | Run `npm run build` locally to test |
| Old content showing | Clear browser cache (Cmd+Shift+R) |
| Still seeing old build | Click "Trigger deploy" in Netlify dashboard |
| Custom domain not working | Check DNS settings in domain registrar |
| Environment variables not working | Add them in Netlify dashboard settings |

## Questions?

- Netlify docs: https://docs.netlify.com/
- Vite docs: https://vitejs.dev/
- Project README: See README.md

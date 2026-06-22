# Everest TV - Vercel Deployment Guide

## Prerequisites

- Vercel account (https://vercel.com)
- GitHub repository connected to Vercel
- Node.js 18+ (Vercel uses this by default)

## Deployment Steps

### 1. Connect Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Select your GitHub repository (EVEREST-TV)
4. Click "Import"

### 2. Configure Build Settings

In the Vercel project settings:

**Framework Preset:** Vite
**Build Command:** `pnpm build`
**Output Directory:** `dist/public`
**Install Command:** `pnpm install --frozen-lockfile`

### 3. Environment Variables (if needed)

If you need environment variables, add them in:
- Project Settings → Environment Variables

### 4. Deploy

Click "Deploy" and wait for the build to complete.

## Troubleshooting

### Error: "Ignored build scripts"

**Solution:** This warning is normal and can be ignored. The build will still succeed.

To suppress it, ensure these files are in your repository:
- `.npmrc` - Configures npm/pnpm behavior
- `.pnpmfile.cjs` - Allows build scripts to run
- `vercel.json` - Vercel configuration

### Error: "Cannot find module"

**Solution:** Run `pnpm install` locally first:
```bash
cd /path/to/everest-tv
pnpm install
pnpm build
```

Then push to GitHub.

### Build Timeout

**Solution:** Increase build timeout in `vercel.json`:
```json
{
  "buildCommand": "pnpm build",
  "functions": {
    "server/index.ts": {
      "maxDuration": 120
    }
  }
}
```

## Local Testing

Before deploying to Vercel, test locally:

```bash
# Install dependencies
pnpm install

# Build the project
pnpm build

# Preview the build
pnpm preview
```

## Production Deployment

Once deployed to Vercel:

1. Your site will be available at: `https://everest-tv.vercel.app` (or custom domain)
2. Every push to `main` branch triggers automatic deployment
3. You can configure custom domains in Vercel project settings

## Custom Domain

To add a custom domain:

1. Go to Vercel Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed by Vercel

## Performance Optimization

The project includes:
- Code splitting (React vendor chunk)
- Minification with Terser
- CSS optimization with Tailwind
- Image optimization ready

## Support

For Vercel-specific issues: https://vercel.com/support
For project issues: Check GitHub repository

---

**Last Updated:** June 22, 2026

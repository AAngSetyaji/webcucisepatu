# Deploying to Vercel

This project is configured to be deployed to Vercel using the `vercel-php` runtime and Vite for frontend assets.

## Prerequisites

1. Create a [Vercel account](https://vercel.com/signup).
2. Install Vercel CLI (optional, if deploying from terminal):
   ```bash
   npm i -g vercel
   ```

## Important: Build Assets

The `public/build` directory has been **removed from `.gitignore`** and is now committed to the repository. This ensures that:
- Build assets are available immediately on deployment
- The Vercel build process can also regenerate them if needed

## Option 1: Deploy via Git (Recommended)

1. **Build locally** (already done):
   ```bash
   npm run build
   ```

2. **Commit all changes** including build assets:
   ```bash
   git add .
   git commit -m "Deploy to Vercel with build assets"
   git push
   ```

3. **Import project in Vercel Dashboard**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your Git repository

4. **Configure Project Settings**:
   - **Framework Preset**: `Other` (don't use Vite preset)
   - **Build Command**: Use default or `bash build.sh`
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

5. **Environment Variables**:
   The `APP_KEY` is already in `vercel.json`, but for production you should add it to Vercel Dashboard instead:
   - Go to Project Settings → Environment Variables
   - Add: `APP_KEY` = `base64:Ic8nLP71N10E2ZKLNdwStuXrDvClTeGpBQppj5JwcuQ=`
   - (Optional) Remove APP_KEY from `vercel.json` for security

6. **Deploy!**

## Option 2: Deploy via CLI

1. Run the deploy command from the project root:
   ```bash
   vercel
   ```
2. Follow the prompts to link the project.
3. For production deployment:
   ```bash
   vercel --prod
   ```

## Troubleshooting

### Assets returning 404
If you see 404 errors for `/build/assets/*` files:
1. Check that `public/build` directory exists and contains files
2. Verify the build ran successfully in Vercel deployment logs
3. Check that `vercel.json` routes are configured correctly

### Different asset hashes
The CSS/JS filenames include content hashes (e.g., `app-B0Pm3QC4.css`). These may differ between local and Vercel builds. This is normal - Laravel's `@vite()` directive reads from `manifest.json` to get the correct filenames.

## Notes

- **Database**: Vercel does not host databases. You need to use an external database provider (e.g., Supabase, PlanetScale, Neon, or a remote MySQL/PostgreSQL server). Update your `DB_*` environment variables in Vercel accordingly.
- **Storage**: Vercel functions have a read-only filesystem (except `/tmp`). Ensure you use a cloud storage driver like `s3` for file uploads if needed.
- **Build Script**: The `build.sh` script handles both npm and composer dependencies during deployment.


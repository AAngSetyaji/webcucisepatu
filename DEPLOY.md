# Deploying to Vercel

This project is configured to be deployed to Vercel using the `vercel-php` runtime and Vite for frontend assets.

## Prerequisites

1. Create a [Vercel account](https://vercel.com/signup).
2. Install Vercel CLI (optional, if deploying from terminal):
   ```bash
   npm i -g vercel
   ```

## Option 1: Deploy via Git (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel Dashboard.
3. **Configure Project Settings:**
   - **Framework Preset:** `Vite` or `Other`.
   - **Build Command:** Override to:
     ```bash
     npm run vercel-build
     ```
     (This runs `npm install && vite build && composer install ...`)
   - **Output Directory:** `public` (or leave default if Vercel detects it correctly, but `vercel.json` routes handle serving).

4. **Environment Variables:**
   Add the following environment variables in Vercel Project Settings:
   - `APP_KEY`: Copy this from your local `.env` file (e.g., `base64:...`).
   - `APP_ENV`: `production`
   - `APP_DEBUG`: `false` (or `true` for debugging)
   - `APP_URL`: `https://your-project-name.vercel.app` (or your custom domain)

5. Deploy!

## Option 2: Deploy via CLI

1. Run the deploy command from the project root:
   ```bash
   vercel
   ```
2. Follow the prompts to link the project.
3. Set up the Environment Variables in the Vercel Dashboard as described above.
4. For production deployment:
   ```bash
   vercel --prod
   ```

## Notes

- **Database:** Vercel does not host databases. You need to use an external database provider (e.g., Supabase, PlanetScale, Neon, or a remote MySQL/PostgreSQL server). Update your `DB_*` environment variables in Vercel accordingly.
- **Storage:** Vercel functions have a read-only filesystem (except `/tmp`). Ensure you use a cloud storage driver like `s3` for file uploads if needed, or configured the temporary cache paths in `vercel.json` (already done).


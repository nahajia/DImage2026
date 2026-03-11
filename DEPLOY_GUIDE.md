# GitHub CI/CD Deployment Guide

This project is currently configured for **local builds** for easy development. To switch back to using **GitHub Actions** and pulling images from the **GitHub Container Registry (GHCR)**, follow these steps:

## 1. Update `docker-compose.yml`
You need to tell Docker Compose to pull images from GitHub instead of building them locally. Replace the `build: ...` lines with `image: ...` lines:

```yaml
  backend:
    image: ghcr.io/${GITHUB_REPOSITORY_OWNER}/jatek-backend:main
    # remove build: ./backend
  
  frontend:
    image: ghcr.io/${GITHUB_REPOSITORY_OWNER}/jatek-frontend:main
    # remove build: ./frontend
```

## 2. Ensure GitHub Actions are Running
1. Push your changes to GitHub.
2. Go to the **Actions** tab in your repository.
3. Verify that the `CI/CD` workflow completes successfully. This will push the images to `ghcr.io`.

## 3. Local Authentication
Before you can pull private images from GHCR, you must log in:
1. Create a **Personal Access Token (classic)** with `read:packages` and `repo` scopes.
2. Run the following command in PowerShell:
   ```powershell
   echo "YOUR_PAT_TOKEN" | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin
   ```

## 4. Run the Application
Make sure your `.env` file has the correct `GITHUB_REPOSITORY_OWNER` (the name of the account that owns the repo), then run:

```powershell
docker-compose pull
docker-compose up -d
```

---

### Important Notes:
- **Case Sensitivity**: GHCR image names must be entirely lowercase.
- **Tags**: The current workflow tags images with the branch name (e.g., `:main`). Ensure your `docker-compose.yml` matches the tag shown in your GitHub Packages tab.
- **Visibility**: If you get a "not found" error after logging in, go to the Package settings on GitHub and ensure the visibility is set to **Public** or that the repository has **Actions Access** (Read) granted to the package.

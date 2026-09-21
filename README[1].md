# Grow With Code v7 Production

Production-oriented split deployment:
- `frontend/`: current Grow With Code UI, TypeScript tests, Netlify build.
- `backend/`: Spring Boot API, JWT auth, PostgreSQL, Flyway, health endpoint.
- `docker-compose.yml`: local PostgreSQL + API.
- `render.yaml`: example backend/database deployment blueprint.
- `.github/workflows/ci.yml`: frontend + backend CI.

## Local backend
1. Copy `.env.example` to `.env`.
2. Generate a real random Base64 JWT secret of at least 32 bytes.
3. Set a strong database password.
4. Run `docker compose up --build`.

API health: `http://localhost:8080/actuator/health`.

## Local frontend
Inside `frontend/`:
`npm install`
`npm run dev`

The local frontend uses `http://localhost:8080/api`.

## Production frontend on Netlify
Set `VITE_API_BASE_URL` to your deployed backend URL ending in `/api`.
Netlify build: `npm run build`
Publish directory: `dist`

The API URL is public configuration, not a secret. Do not put JWT secrets or database credentials in frontend variables.

## Production backend
Deploy `backend/` as a Docker service and attach PostgreSQL. Required environment variables:
- `DATABASE_URL` (JDBC URL)
- `DATABASE_USER`
- `DATABASE_PASSWORD`
- `JWT_SECRET_BASE64`
- `CORS_ORIGIN` (exact Netlify site origin)
Optional: `JWT_ISSUER`, `PORT`.

## Security baseline
- Passwords BCrypt-hashed.
- Stateless signed JWTs, 2-hour expiry.
- CORS allowlist is one configured frontend origin.
- `/api/**` authenticated except auth endpoints.
- all unrelated backend routes denied.
- DB schema managed by Flyway.
- secrets stay server-side.
- backend container runs as non-root.

## Before public launch
Run CI/tests, use HTTPS, set production secrets in the hosting provider, confirm CORS with the exact Netlify domain, and add rate limiting/email verification before accepting public registrations at scale.

## Release note
The public browser runtime uses the known-working v5 `script.js` while the typed modular replacement lives under `frontend/src/`. A previous mechanical split was rejected by syntax tests and is not shipped. This release favors a working deployable runtime over pretending the migration is complete.

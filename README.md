# Frontend v4

Minimal black/green learning UI.

- JWT login/register dialog
- account-based PostgreSQL cloud sync with localStorage fallback
- lessons, quizzes, notes, XP, filters, exports and community
- native Java editor using `/api/code/run`
- no OneCompiler dependency

For full functionality run the Spring Boot backend. Opening `index.html` directly still supports local course mode, but login/community/cloud runner require `http://localhost:8080` backend.


## Java: Місто роботів
Вкладка «Грати»: поле 5×5, 10 місій, 3 рівні підказок, покрокове виконання, stop/reset, локальне збереження пройдених місій. Браузерна версія підтримує навчальну підмножину Java, а не повну JVM.

## v4 additions
- Robot City expanded from 10 to 20 missions: nested for, harder if/else, simple zero-argument teaching methods.
- Mission time/actions, local Top-50 leaderboard and achievements.
- Cloud leaderboard is API-ready conceptually, but the Netlify-only build cannot provide a shared leaderboard until the Spring backend is deployed.
- Practice tab with portfolio projects and checklists.
- Local adaptive analytics: repeated failed attempts (>30% after enough tries) trigger a topic recommendation.
- Printable/offline HTML Java + Spring cheat sheet.
\n\n## v5\nAdded chapters/gates, secret achievements, Robot City story/Master/editor UI/path trace, offline help, 10 mini-project portfolio, profile/ranking, exports/certificate, themes/settings, PWA offline cache. Cloud leaderboard, real AI, GitHub OAuth/upload, certificate verification, real video playlists, Postman remote execution and VS Code extension require deployed backend/OAuth/external services and are intentionally not faked in this Netlify-only build.\n
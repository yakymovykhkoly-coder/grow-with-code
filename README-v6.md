# Grow With Code v6 — architecture refactor

## What changed
- Removed the 769-line `script.js` monolith.
- Runtime is separated into `course-data`, `course-ui`, `community`, `auth`, `robot-city`, `practice`, and `platform`.
- Added a typed TypeScript architecture under `src/`: Store, StorageService, EventBus, AuthService, Parser, Compiler, RobotVM, typed errors and interfaces.
- Robot errors now distinguish SyntaxError / RuntimeError / LogicError and include line/column when the source token can be located.
- Robot console auto-scrolls to the newest message.
- API address comes from `config.js`; localhost is used only for local development.
- Added automated Vitest suites for parser, compiler and VM (27 tests).

## Run the static site
Deploy the ZIP to Netlify as before. `index.html` is at the ZIP root.

## Development checks
```bash
npm install
npm run typecheck
npm test
```

## Production API
Set `window.__GWC_API_BASE__` before `config.js`, or generate a production `config.js` during deployment. Do not hard-code production URLs in application modules.

## Migration note
The browser runtime was split without rewriting every existing UI feature at once, to preserve current v5 behavior. The new TypeScript `src/` is the clean typed foundation for replacing the remaining classic runtime module-by-module.

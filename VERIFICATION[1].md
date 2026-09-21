# Verification gate
Run `./verify-release.sh`.

It checks strict TypeScript, Parser/Compiler/RobotVM Vitest suites, asset smoke checks, committed-secret scan, production frontend build, and Maven/JUnit backend tests.

A real hosting smoke-test still requires the actual production domain, PostgreSQL credentials, HTTPS endpoint and CORS origin. Those secrets are intentionally not bundled.

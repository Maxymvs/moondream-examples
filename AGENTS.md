# Repository Guidelines

## Project Structure & Module Organization
- `main.js` holds the default Node example that calls the Moondream vision language API. Adjust the `vl` client instantiation to switch between local Station and Cloud endpoints.
- `images/` contains bundled sample assets; add new fixtures here and reference them with workspace-relative paths.
- `package.json` defines scripts and dependencies. Keep client code in the project root unless you introduce additional modules—place shared helpers under `src/` if you expand the example suite.

## Build, Test, and Development Commands
- `bun install` resolves the `moondream` SDK and peers; rerun after changing dependencies.
- `bun run start` executes `main.js`. Pass flags (e.g., `MOONDREAM_API_KEY`) as environment variables: `MOONDREAM_API_KEY=... bun run start`.
- `bun run dev` keeps the script hot-reloading while you tweak the example.

## Coding Style & Naming Conventions
- Target ES2022 syntax with ESM imports. Use 2-space indentation and prefer `const` for immutable references.
- Name files and helpers in `camelCase` (`captionImage.js`) and exported symbols in `camelCase` or `PascalCase` for classes.
- Before committing, format with `bunx prettier --write main.js` if you touch example code.

## Testing Guidelines
- No automated tests exist yet. For new examples, add lightweight smoke scripts under `tests/` and execute them with `bun run tests/<script>.js` to assert API responses.
- Document manual test steps in code comments or PR descriptions when adding features.

## Commit & Pull Request Guidelines
- Follow conventional-style imperatives (`feat: add cloud demo config`). Group related edits—credentials, assets, and code—in the same commit.
- PRs should describe the scenario exercised (local Station vs. Cloud), list manual verification (`bun run start` output), and attach screenshots or response samples if behavior changes.
- Reference relevant issues or TODOs. Flag any new secrets or configuration knobs so reviewers can validate deployment expectations.

## Security & Configuration Tips
- Do not commit real API keys. Use `.env.local` for local secrets (`MOONDREAM_API_KEY` for Cloud, `MOONDREAM_API_URL` for local overrides) and document placeholder usage in PR notes.
- When sharing assets, ensure licensing permits redistribution; add sources in the PR description if uncertain.

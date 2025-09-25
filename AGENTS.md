# Moondream AI Reference

## Quickstart & Client Setup
- Follow the official Quickstart guide ([docs.moondream.ai/quickstart](https://docs.moondream.ai/quickstart)) for end-to-end environment prep, including installing the `moondream` SDK with Bun/Node.
- Export the appropriate environment variables before running examples: Cloud runs require `MOONDREAM_API_KEY`, while local Station deployments typically use `MOONDREAM_API_URL`; mirror this in `.env.local` when sharing instructions.
- The Quickstart includes minimal code snippets that align with `main.js`: instantiate `const vl = new MoondreamClient({ apiKey, apiUrl })` and call `await vl.prompt()` (or skill-specific helpers) to drive multimodal requests.
- Station vs. Cloud: the same client can target a locally hosted Station endpoint or the hosted Cloud API; switch by adjusting the `apiUrl` configuration.

## Skill Catalog Highlights
- Review the Skills overview ([docs.moondream.ai/skills](https://docs.moondream.ai/skills/)) to understand the model's pre-built capabilities and required payload shapes.
- Core categories covered in the catalog: vision-language chat for general Q&A, structured extraction (key-value or JSON layouts), visual grounding (point to regions or count objects), rich captioning/summarization, and OCR-style text transcription.
- Each skill entry documents mandatory parameters, optional modifiers (temperature, formatters, region hints), and sample inputs/outputs—link to these directly from new examples so future contributors can trace behavior back to the spec.
- Skills return consistent metadata (e.g., confidence scores, bounding polygons) that can be logged in examples for debugging; make sure to surface any non-default fields you rely on.

## Testing & Verification Tips
- Leverage skill-specific examples from the docs to craft smoke tests in `tests/`; referencing official sample payloads reduces drift when the API evolves.
- When adding new demos, note which skill and API version they exercise, and capture a representative response snippet in the PR description so reviewers can compare against doc examples.
- Monitor release notes in the Skills section for breaking changes—document any required SDK updates or new parameters in this file to keep the team aligned.

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

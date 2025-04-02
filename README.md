# Monorepo Template

A basic pnpm monorepo template that makes use of pnpm workspaces and Docker Compose for easy development and deployment.

## Setup

1. Create a new git repo with this one as a template.
2. Ensure you have [`pnpm` installed](https://pnpm.io/).
3. Clone your repo locally and run `pnpm install` in the local copy.

> [!NOTE] To install dependencies in the `server`, `common`, and `client` packages run `pnpm run <package> add <dependency>`

## Development

- Run `pnpm run dev` to test the entire project.
- Run `pnpm run dev:server` to test the server.
- Run `pnpm run dev:client` to test the client.

> [!IMPORTANT] There is currently no dev script for `common`.

## Deployment

1. Ensure all required PRs are merged into the `main` branch.
2. Update versioning in the four (4) `package.json`s and `CHANGELOG.md` using the [CalVer](https://calver.org/) format `YYYY.0M.0D-MICRO`.
3. Push versioning changes.
4. Run `git tag -a "YYYY.0M.0D-MICRO" -m "see CHANGELOG"`
5. Run `git push --tags`

Manual deployment can be done by running `pnpm run build` and uploading the resulting `./src/<package>/build` folders to your hosting platform of choice.

Alternatively you can deploy the project automatically using [Docker Compose](). You can test this locally by running `docker compose build` followed by `docker compose up`.


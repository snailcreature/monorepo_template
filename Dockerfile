# syntax=docker/dockerfile:1
FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store echo "y" | pnpm install --frozen-lockfile
RUN pnpm run build
RUN pnpm run client deploy /prod/client
RUN pnpm run server deploy /prod/server

FROM base AS server
COPY --from=build /prod/server /prod/server
WORKDIR /prod/server
RUN ls
EXPOSE 3000
CMD [ "pnpm", "start" ]

FROM base AS client
COPY --from=build /prod/client /prod/client
WORKDIR /prod/client
EXPOSE 8080
CMD [ "pnpm", "start" ]
FROM node:20-alpine AS base

RUN corepack enable && corepack prepare pnpm@latest --activate
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN pnpm add -g turbo@^2

FROM base AS builder
WORKDIR /app
COPY . .

# Generate a partial monorepo with a pruned lockfile for a target workspace.
RUN turbo prune customer --docker

FROM base AS installer
RUN apk add --no-cache python3 py3-pip make g++
RUN apk update

WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /app/out/full/ .

RUN pnpm install
RUN STANDALONE=true pnpm turbo run build --filter=customer

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/customer/next.config.mjs .
COPY --from=installer /app/apps/customer/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/customer/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/customer/.next/static ./apps/customer/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/customer/public ./apps/customer/public

ARG PORT=3000
EXPOSE ${PORT}

CMD HOSTNAME="0.0.0.0" node apps/customer/server.js

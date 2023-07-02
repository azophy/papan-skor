# Simple Scoreboard with Nuxt

Simple sharable online scoreboard with multi device synchronization.

## Tech stack
- [Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
- [Nitros Storage](https://nitro.unjs.io/guide/storage#development-storage) (using FS for local development, and [Vercel's KV](https://unstorage.unjs.io/drivers/vercel-kv) in production)

## Architecture
- sync using simple pooling

## Future Improvements
- [x] animation on changing score
- [x] use event pooling to reduce jitter and network request
- [x] store redis key with expiry limit to avoid full storage
- [x] specify custom url (id) during board creation
- [x] edit board detail
- [ ] improve pooling efficiency by only sending changed data
- [ ] more efficient sync mechanism, either using websocket or peer-to-peer webrtc
- [ ] conflict prevention using locking mechanism
- [ ] user login & permissions

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```


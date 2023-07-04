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

## License

The MIT License (MIT)

Copyright © 2023 Abdurrahman Shofy Adianto

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


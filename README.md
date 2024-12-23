# Welcome to React Router + Hono + Vite + Vercel!

```shell
npx create-react-router@latest --template https://github.com/huijiewei/react-router-hono-vercel-template
```

or

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhuijiewei%2Freact-router-hono-vercel-template&project-name=react-router-vercel-template&repository-name=react-router-vercel)

---

## Vercel Project Settings

Change `Build and Output Settings`

override `Output Directory`

```
build/client
```

Document: [vercel-serve](https://github.com/huijiewei/resolid-react-router-hono?tab=readme-ov-file#vercel-serve)

---

📖 See the [React Router docs](https://reactrouter.com/home) for details on supported features.

## Development

Run the dev server:

```shellscript
npm run dev
```

## Node Deployment

First, build your app for production:

```sh
npm run build:node
```

Then run the app in production mode at local:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in React Router app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

# pimp-my-readme-next

[![GitHub deployments](https://img.shields.io/github/deployments/Podter/pimp-my-readme-next/Production?label=vercel&logo=vercel&logoColor=white&style=for-the-badge)](https://pimp-my-readme-next.vercel.app/)

[![Pimp my README, built with Next.js and deployed on Vercel](https://pimp-my-readme-next.vercel.app/api/wavy-banner?subtitle=built%20with%20Next.js%20and%20deployed%20on%20Vercel&title=Pimp%20my%20README)](https://pimp-my-readme-next.vercel.app/)

## Original repository

The original Pimp my README made by joshdsouza8, you can see his repository here:

https://github.com/joshdsouza8/pimp-my-readme

## Why

joshdsouza8's Pimp my README is down (https://pimp-my-readme.webapp.io/) and [vivekkj123 host it on Heroku](https://github.com/joshdsouza8/pimp-my-readme/issues/11#issuecomment-1206689828) but it's slow (I think because cold start)

I want to host my own one but I don't want to pay for Heroku (Heroku isn't free anymore) and I try to host it on Vercel but I can't so I build it again using Next.js and host it on Vercel

## Migrate from Pimp my README

Just change from `https://pimp-my-readme.webapp.io/pimp-my-readme` to `https://pimp-my-readme-next.vercel.app/api` and everything should work

```
# Example
https://pimp-my-readme.webapp.io/pimp-my-readme/wavy-banner?title=Hello%20world
# to
https://pimp-my-readme-next.vercel.app/api/wavy-banner?title=Hello%20world
```

# Examples

[![Pimp my README, An open source project :)](https://pimp-my-readme-next.vercel.app/api/wavy-banner?title=Hello%20world)](https://pimp-my-readme-next.vercel.app)

[![Pimp my README](https://pimp-my-readme-next.vercel.app/api/sliding-text?emojis=1f91f-1f3fe_1f60e_1f608_1f995&text=Pimp%20your%20README)](https://pimp-my-readme-next.vercel.app)

[![Visitor Counter for pimp-my-readme](https://pimp-my-readme-next.vercel.app/api/visitor-counter?page=pimp-my-readme-next)](https://pimp-my-readme-next.vercel.app)

[![JavaScript_HTML_CSS_Python_Java_NodeJS_GoLang_Elixir_MySQL_PostgreSQL_MongoDB_Redis_AWS_ReactJS_Flask_Express_](https://pimp-my-readme-next.vercel.app/api/technology?technology=JavaScript_HTML_CSS_Python_Java_NodeJS_GoLang_Elixir_MySQL_PostgreSQL_MongoDB_Redis_AWS_ReactJS_Flask_Express_)](https://pimp-my-readme-next.vercel.app)

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

Run this to build

```bash
npm run build
# or
yarn build
```

And then start the server

```bash
npm start
# or
yarn start
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

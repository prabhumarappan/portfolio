## Getting Started

Live: https://portfolio-prabhumarappan.vercel.app/

## Libraries, Frameworks, APIs and Platforms Used

1. Reactjs ([https://reactjs.org/](https://reactjs.org/))
2. Nextjs ([https://nextjs.org/](https://nextjs.org/))
3. TailwindCSS ([https://tailwindcss.com/](https://tailwindcss.com/))
4. React Icons (https://react-icons.github.io/react-icons/)
5. Vercel ([https://vercel.com/](https://vercel.com/))
6. Weather API ([https://www.weatherapi.com/](https://www.weatherapi.com/))

## Resources Used

1. Next.js and Tailwind Starter -> https://www.youtube.com/watch?v=k-Pi5ZMxHWY
2. Pages -> https://nextjs.org/docs/basic-features/pages
3. Font -> https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/fonts/Gumela%20Regular.otf
4. Geolocation -> https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs
5. Refactor Repeated Code using Map -> https://css-tricks.com/render-children-in-react-using-fragment-or-array-components/
6. Deployment -> https://nextjs.org/learn/basics/deploying-nextjs-app/deploy

## Prerequisite:

1. Node.js 14.6.0 or newer
2. Nextjs
3. Reactjs
4. Weather API Account

First, install required node modules :

```
npm i
```

Second, sign up on https://www.weatherapi.com/

1. Copy API Key
2. Create a new file like `.env.local`
3. Copy template from `.env`
4. Paste API Key as value for `NEXT_PUBLIC_WEATHER_API_KEY`

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

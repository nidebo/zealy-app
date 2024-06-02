This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes from the exercise

I used the placeholder Next.js initial page to display some reactions there.
Some are initially placed, to see an initial state (this should come from server).

When clicking on a pin, it expands so you can see the content and edit it.

Then, when clicking anywhere on the page, a new reaction input pops up, where you can create a new reaction and save it.

The reaction locations are stored and always displayed relative to the page dimensions.

Pressing escape key removes the focus of a reaction.

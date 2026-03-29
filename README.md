# Personal React Website

My personal website build using React and Material-UI.

It features 2 routes or pages, and a dark mode switch.

It was created while I was less comfortable with Javascript and React, so some code is dubious. I've cleaned up a good deal but some structural choices were just not worth the time to fix.

I'm deploying using the gh-pages package

It's also commented pretty heavily so it's pretty understandable, take a look!

Thanks for reading :)

-Adam

## Setup and Deployment Instructions

### Prerequisites
- Node.js >=18 <21 (recommended: 18.17.1)
- npm >=10.1.0 (bundled with Node 18.17+)
- Git (for deployment)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/adamhammond22/adamhammond22.github.io.git
   cd adamhammond22.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the development server:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build
Create a production build:
```bash
npm run build
```

### Deployment to GitHub Pages
Deploy the build to GitHub Pages:
```bash
npm run deploy
```

This will build the project and push the `build` folder to the `gh-pages` branch of your repository.

### Notes
- The site is configured for GitHub Pages with the homepage set to `https://adamhammond22.github.io`.
- If deploying to a different repository, update the `homepage` field in `package.json`.
- Ensure Git is configured with your name and email before deploying.

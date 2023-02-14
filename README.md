# Basic TypeScript React Boilerplate - with vite - 2023 <!-- omit in toc -->

Basic React with typescript setup with vite

![hello](docs/images/hello-world.png)

- [Initialise the package](#initialise-the-package)
- [Install Dependencies](#install-dependencies)
  - [Install React](#install-react)
  - [Install TypeScript](#install-typescript)
  - [Install vite](#install-vite)
  - [tldr](#tldr)
- [Create files and folders](#create-files-and-folders)
  - [vite.config.ts](#viteconfigts)
  - [tsconfig.json](#tsconfigjson)
  - [index.html](#indexhtml)
  - [index.tsx](#indextsx)
  - [App.tsx](#apptsx)
  - [index.css](#indexcss)
- [Add Scripts](#add-scripts)
- [Build](#build)
- [Start](#start)
- [References](#references)

---

## Initialise the package

`yarn init`

---

## Install Dependencies

### Install React

- react — main react library
- react-dom — allows us to use react in the browser

`yarn add react react-dom`

add the types

`yarn add -D @types/react @types/react-dom`

---

### Install TypeScript

`yarn add -D typescript`

---

### Install vite

`yarn add vite @vitejs/plugin-react vite-plugin-html --D`

---

<!-- ### Install webpack

- webpack — JavaScript bundler
- webpack-cli — run webpack commands from the command line.
- webpack-dev-server - allows us to run the site on localhost
- html-webpack-plugin - adds the bundled js file into the html

`yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin`

---

#### What even is webpack?

webpack is a JavaScript code bundler that traverses the dependency graph of your project (chain of imports you use in your JS files), and creates a static JavaScript file(s) that is ready to be attached to your HTML.

- Entry — This is the top of the dependency tree (conventionally and default src/index.js) where webpack starts with the bundling process.
- Output — The output file(s). AKA the bundle.
- Loaders — webpack, by default, only works with JavaScript files, but we obviously want to be able to import other file types(CSS, JSX, etc.). This is where loaders come into play. They are packages (not included with Webpack itself) that help us import non-JavaScript files directly into our JavaScript.
- Plugins — Plugins are also other third party packages that can be used with webpack to extend it’s functionality. e.g html-webpack-plugin.

---

### Install Babel loaders

- @babel/core - Babel itself
- @babel/preset-env - preset for compiling ES2015+ syntax
- @babel/preset-react - preset that allows us to work with React/jsx
- babel-loader - loads the files (in this case jsx)
- style-loader
- css-loader
- ts-loader
- @babel/plugin-transform-regenerator
- @babel/plugin-transform-runtime

`yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader style-loader css-loader ts-loader @babel/plugin-transform-regenerator @babel/plugin-transform-runtime`

--- -->

### tldr

```
yarn add react react-dom

yarn add -D vite @vitejs/plugin-react vite-plugin-html @babel/core typescript @types/react @types/react-dom
```

---

## Create files and folders

Here is the folder structure

```
├──src
│   ├──App.tsx
│   ├──index.tsx
│   ├──index.html
│   └──index.css
├──.babelrc.json
├──tsconfig.json
├──vite.config.json
├──package.json
└──yarn-lock.json
```

---

<!-- ### .babelrc

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    "@babel/plugin-transform-regenerator",
    "@babel/plugin-transform-runtime"
  ]
}

```

--- -->

### vite.config.ts

```ts
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    // Relative to the root
    outDir: '../dist',
  },
  plugins: [
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{jsx,tsx}',
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title:
            env === 'production' ? 'My site' : `My site [${env.toUpperCase()}]`,
        },
      },
    }),
  ],
})
```

<!-- #### What is this doing?

- entry - setting the entry js file to start traversing the dependency tree from
- output - where to save the bundled files
- module.rules - e.g. use babel-loader, whenever it sees any file ending in either js or jsx. Use style loader then css loader when loading css files
- plugins - `HtmlWebPackPlugin` - add/update the script path in the html to be the bundled js file and copy to the output folder -->

---

### tsconfig.json

```json
{
  "compilerOptions": {
    "module": "esnext",
    "outDir": "dist/",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true,
    "target": "ESNext",
    "allowJs": false,
    "checkJs": false,
    "jsx": "react",
    "pretty": true,
    "skipLibCheck": true,
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "lib": ["dom", "dom.iterable", "ESNext"],
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

---

### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React with Webpack - Basic Boilerplate</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="modules" src="index.tsx"></script>
  </body>
</html>
```

---

### index.tsx

```js
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const container = document.getElementById('app') as Element
const root = createRoot(container)
root.render(<App />)
```

---

### App.tsx

```js
import React from 'react'

import './index.css'

export default function App() {
  return <h1>Hello World</h1>
}
```

---

### index.css

Basic example just for illustration

```css
body {
  font-family: 'Courier New', Courier, monospace;
}
```

---

## Add Scripts

In package.json

```json
"scripts": {
    "build": "vite build src",
    "dev": "vite serve src",
    "preview": "vite preview",
    "typecheck": "tsc"
  },
```

---

## Build

`yarn build`

output to dist folder

---

## Start

`yarn dev`

http://localhost:9000

---

## References

- Very useful write up that I borrowed heavily from here - all credit to them for much of the info summarising webpack and babel - [https://levelup.gitconnected.com/how-to-setup-a-react-application-with-webpack-f781b5c4a4ab](https://levelup.gitconnected.com/how-to-setup-a-react-application-with-webpack-f781b5c4a4ab)

and here for vite [https://dev.to/wojtekmaj/migrating-your-react-app-from-webpack-to-vite-inp](https://dev.to/wojtekmaj/migrating-your-react-app-from-webpack-to-vite-inp)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

![](./src/assets/figmasnap.png)

# Initial Tailwind CSS with React
```bash
# install react template
npm create vite@latest my-project -- --template react
cd my-project

# tailwind css
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

custom Tailwind Css variable
```js
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#f5f7fa',
        'neutralDGray': '#4d4d4d',
        'brandPrimary': '#4caf4f',
        'neutralGray': '#717171',
      }
    },
  },
  plugins: [],
}
```

import fonts
```css
/*App.css*/
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
```
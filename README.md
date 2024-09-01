### Projeto React-Ts.
  * [x] TailwindCSS -- Estilizações
  * [x] ShadCN-UI -- biblioteca
  * Zod -- validar
  * React-Icons -- Icons
  * Gráficos 
  * Toastify
  * Json-Server -- Api mocada
  * Axios

#### TailWindCSS Instalação
* 1. 
npm install -D tailwindcss postcss autoprefixer

* 2. 
npx tailwindcss init -p

* 3. tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

* 4. /src/index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

* 5. Exemplo

### ShadCN-UI
* ref.

* 1. tsconfig.json
```
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

* 2. tsconfig.app.json
```
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}
```

* 3.
```
npm i -D @types/node
```

* 4. vite.config
```
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```
* 5. instalar e escolher o tema
```
npx shadcn@latest init
```

* 6. elemento para teste
```
npx shadcn@latest add button
```

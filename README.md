### Projeto React-Ts.
  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) TailwindCSS -- Estilizações <br />
  ![ShadCnUI](https://img.shields.io/badge/shadCnUi-%233068b7.svg?style=for-the-badge&logo=shadcnUi&logoColor=white&backgroundColor=black) ShadCN-UI -- biblioteca <br />
  ![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white) Zod -- validar <br />
  ![Icons](https://img.shields.io/badge/icons-%233068b7.svg?style=for-the-badge&logo=icon&logoColor=white) React-Icons -- Icons <br />
  ![Charts](https://img.shields.io/badge/charts-%233068b7.svg?style=for-the-badge&logo=chart&logoColor=white) Gráficos <br /> 
  ![Toastify](https://img.shields.io/badge/toastify-%233068b7.svg?style=for-the-badge&logo=toastify&logoColor=white) Toastify <br />
  ![Server](https://img.shields.io/badge/server-%233068b7.svg?style=for-the-badge&logo=server&logoColor=white) Json-Server -- Api mocada <br />
  ![Axios](https://img.shields.io/badge/axios-%233068b7.svg?style=for-the-badge&logo=axios&logoColor=white) Axios

#### TailWindCSS Instalação
* 1. 
```
npm install -D tailwindcss postcss autoprefixer
```

* 2. 
```
npx tailwindcss init -p
```

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

* 3. Instalando os types do node
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

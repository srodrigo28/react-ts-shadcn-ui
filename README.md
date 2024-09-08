### Projeto React-Ts.
  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) -- Estilizações <br />

  ![ShadCnUI](https://img.shields.io/badge/shadCnUi-0A0A0A?style=for-the-badge&logo=shadcnUi&logoColor=white) -- Biblioteca <br />

  ![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white) -- Validar <br />

  ![React Icons](https://img.shields.io/badge/reactIcons-E6007A?style=for-the-badge&logo=icon&logoColor=white) -- Icons <br />

  ![Chart](https://img.shields.io/badge/chart-%233068b7.svg?style=for-the-badge&logo=chart&logoColor=white) -- Gráficos <br />

  ![Toastify](https://img.shields.io/badge/toastify-%233068b7.svg?style=for-the-badge&logo=toast&logoColor=white) -- Toastify <br />

  ![Json Server](https://img.shields.io/badge/server-%23F5792A.svg?style=for-the-badge&logo=json&logoColor=white) -- Api mocada <br />

  ![Axios](https://img.shields.io/badge/axios-%234DC730.svg?style=for-the-badge&logo=axios&logoColor=white) -- Axios

### Criando um projeto React
```
npm create vite@latest react-shadcn-ui
```

#### ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) TailwindCSS Instalação
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

### ![ShadCnUI](https://img.shields.io/badge/shadCnUi-0A0A0A?style=for-the-badge&logo=shadcnUi&logoColor=white) ShadCN-UI
* 6. tsconfig.json
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

* 7. tsconfig.app.json ( muita Atenção )
```
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    // ...
  }
}
```

* 8. Instalando os types do node
```
npm i -D @types/node
```

* 9. vite.config
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
* 10. instalar e escolher o tema
```
npx shadcn@latest init
```

* 11. elemento para teste
```
npx shadcn@latest add button
```

#### Rodando o projeto
* 12. terminal
```
npm run dev
```

# Usage:

Использование библиотеки в проекте:
1. Нужно установить библиотеку в проект: 
pnpm i @tehnoroboty/ui-kit

2. Прописать в главный файл проекта, где будет использоваться: 
import '@tehnoroboty/ui-kit/dist/index.css'

Для проекта ui-kit:
1. Вносим изменения после чего push-им на github и после этого меняем версию
2. Сменить версию:
npm version patch


- Clone template: (replace `my-lib` with your project name)
  ```bash
  npx degit https://github.com/ershisan99/lib-with-storybook-starter my-lib
  ```

- Change directory: (replace `my-lib` with your project name)
  ```bash
  cd my-lib
  ```

- Install dependencies:
  ```bash
  pnpm i
  ```

- Run storybook:
  ```bash
  pnpm dev
  ```


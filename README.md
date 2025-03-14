## To Run the project

```bash
npm install
npm run dev
```

Open [http://localhost:3000/projects](http://localhost:3000/projects) with your browser to see the result.

## Architecture

- Next.js, Antd, StyledComponents, Tailwind

- State synchronization is done by optimistic updates to [ProjectsContext](https://github.com/Mustafa-Serhat-Uslu/project-lister/blob/c86aa7c0bc1c354477e3884a55998c961629371b/app/_contexts/ProjectsContext/ProjectsContext.tsx)

- It's a nextjs app with 4 pages for each route

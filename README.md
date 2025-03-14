## Presentation video

[VIDEO HERE!](https://www.loom.com/share/1ced7ed1e5db4957b36e9acfbb9a91f0?sid=af8a030b-7f40-4276-9ff7-7d495e1c0ea0)

## To Run the project

```bash
npm install
npm run dev
```

Open [http://localhost:3000/projects](http://localhost:3000/projects) with your browser to see the result.

## Architecture

- Next.js, Ant Design, StyledComponents, Tailwind

- State synchronization is done by optimistic updates to [ProjectsContext](https://github.com/Mustafa-Serhat-Uslu/project-lister/blob/c86aa7c0bc1c354477e3884a55998c961629371b/app/_contexts/ProjectsContext/ProjectsContext.tsx)

- It's a nextjs app with 4 pages for each route

- Most folders structured under /app

- Uses server actions and a file I/O to simulate test api

- Has responsive design

- All potential errors handled and feedback given to user via toaster component

- Extendability and clean code practices were practiced, includes somewhat clean commit messages :)

- Includes some example tests, can extend if necessary

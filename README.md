# Codegraded Project React

## Scripts

- `npm install`
- `npm run dev`
- `npm test`

## Features

- Base React project with tests (Jest v.27)
- Supports Axios and the browser's fetch API
- Supports styling via Styled Components and vanilla CSS
- Includes an Express server learners can interact with from the app or via Postman (http://localhost:9000)
- Single `dev` script to launch the Express server and the auto-reloading dev server for the frontend
- The `dev` script takes care of freeing ports 3000 and 9000 for better learner experience
- The Express server is mocked in the tests with Mock Service Worker
- It does not depend on any external API to fetch JSON
- Easily deployable to Heroku, so learners can study a working prototype
- Includes staff-facing [Codegrade setup instructions](codegrade_setup.md) and rubric

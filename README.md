# Introduction to Authentication Module Project

## Introduction

Use `Node.js`, `Express` and `Knex` to build an API that provides register, login and logout functionality.

## Instructions

### Task 1: Project Setup

There are two possible ways to submit your project. Your instructor should have communicated which method to use for this project during the Guided Project and in your cohort's Slack channel. If you are still unsure, reach out to Lambda Staff.

#### Option A - Codegrade

- [ ] Fork and clone the repository.
- [ ] Open the assignment in Canvas and click on the "Set up git" option.
- [ ] Follow instructions to set up Codegrade's Webhook and Deploy Key.
- [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [ ] Check to see that Codegrade has accepted your git submission.

#### Option B - Pull Request

- [X] Fork and clone the repository.
- [X] Implement your project in a `firstname-lastname` branch.
- [X] Create a pull request of `firstname-lastname` against your `main` branch.
- [X] Open the assignment in Canvas and submit your pull request.

### Task 2: Minimum Viable Product

#### 2A - Database Access Functions

Write the following user access functions inside `api/users/users-model.js`:

- [X] `find`
- [X] `findBy`
- [X] `findById`
- [X] `add`

#### 2B - Middleware Functions

Write the following auth middlewares inside `api/auth/auth-middleware.js`:

- [X] `restricted`
- [X] `checkUsernameFree`
- [ ] `checkPasswordLength`
- [ ] `checkUsernameExists`

#### 2C - Endpoints

Authentication will be tracked using sessions and cookies. See `api/server.js` for more instructions.

Write the following endpoints. The first one belongs inside `api/users/users-router.js` and the rest inside `api/auth/auth-router.js`:

- [X] `[GET] /api/users`
- [ ] `[POST] /api/auth/register`
- [ ] `[POST] /api/auth/login`
- [ ] `[GET] /api/auth/logout`

#### Users Schema

The database `auth.db3` includes a single `users` table:

| field    | data type        | metadata                                      |
| :------- | :--------------- | :-------------------------------------------- |
| user_id  | unsigned integer | primary key, auto-increments, generated by db |
| username | string           | required, unique                              |
| password | string           | required                                      |

#### Notes

- Run tests locally executing `npm test`.
- The project comes with `migrate`, `rollback` and `seed` scripts in case you need to reset the database.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries or add extra scripts.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work.
- Perform basic professional polishing including spell-checking and grammar-checking on your work.

### Task 3: Stretch Goals

- Build a React application that implements components to register, login and view a list of users. Gotta keep sharpening your React skills.

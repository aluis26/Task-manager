# Momemtum - fs3_w8-10_final-project

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)
FS3 Cohort final project

- [User Flow Diagram](#user-flow-diagram)
- [Fullstack Architecture](#fullStack-architecture)
- [API Routes Plan](#api-routes-plan)
- [Database](#database)
- [Development Setup](#development-setup)

## Description

WIP

## User Flow Diagram

![User Flow Diagram](./screenshots/userflow.png)

### Description of use case

#### 1. Sign up

The unregister user register to access the app.
**Requirements:**

Username
Email
Password

#### 2. Log in

The user can access to the dashboard.
**Requirements:**

Email
Password

If the details requirements are correct the user will be redirect to his dashboard.
If the requirements are not correct, an error message will be shown.

If the user needs to reset the password:

1. Click the "Forgotten password?" button.
2. An email with a link will be sent to the user email account.
3. The user clicks in to the link that redirect to a page that will allow him to create new password.
4. Requirements:
   New password.
   Password confirmation.

#### 3. Interact with Todo list.

The user can:

- Add todo:

  1. User writes the todo and press Enter or "Add" button.

- Edit todo:

  1. User clicks in the specific todo. A model windows is shown with details of the todo.
  2. Add due date.
  3. Add image.
  4. Add comments.

- Delete todo:
  1. User clicks a delete button.
- Mark as done:
  1. User clicks the checkbox and the todo is strikethrough.

#### 4. Log out

1. User press log out button.
2. A model windows is shown with the following text: "Are you sure you want to log out?" and two buttons.
3. User user press "Yes" button to log out and "No" to stay in the dashboard.

## FullStack Architecture

The architecture of the app will be composed by the following elements:
![architecture](./screenshots/graph-architecture.png)

### Front End

The App will be built in React and deployed in Netlify.
The free version of Netlify (https://www.netlify.com) will allow us to make a continued deployment linked with the new commits of the project in Github.

### Back End and Server

The back end part will be built in Node. The server will be allocated in Heroku (https://www.heroku.com), the free plan allow us to have 10k rows stored.

### Complementary API

At least two other APIs from 3rd parties will be used in this application.
-Wheater information from the localization through Open Wheather map API (https://openweathermap.org)
-Quotes through the open API of They Said So. (https://theysaidso.com)
In the first phase of the project, the front end part will connect directly with them.
In the second part we are planning to make the connection through the back end and maybe store some of the data coming from this APIs:

**Second Phase for API**
![architecture2](./screenshots/graph-architecture-v.2.png)

## API Routes Plan

| URI                                                    | HTTP Method | Description                                     | Request Object                                                                                           | Response Object                                                                                                                                                       | Required Parameters                                                  |
|--------------------------------------------------------|-------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| /api/v1/users/:userID/todosParameters: date and status | GET         | Get a specific user’s todos, status or due date | n/a                                                                                                      | {    todos: [        {            id: string            text: string            dueDate: date             priority: integer            status: integer        }    ]} |                                                                      |
| /api/v1/users/:userID/todos                            | POST        | Add a new todo to list                          | {    text: string    dueDate: date    priority: integer}                                                 | {     id: string}                                                                                                                                                     | { text: string }                                                     |
| /api/v1/users/:userID/todos/:id                        | PUT         | Edit a specific todo item                       | {    text: string    dueDate: date    priority: integer}                                                 | {    id: string    text: string    dueDate: date    priority: integer}                                                                                                |                                                                      |
| /api/v1/users/:userID/todos/:id                        | DELETE      | Delete a specific todo item                     | n/a                                                                                                      | {}                                                                                                                                                                    |                                                                      |
| /api/v1/login                                          | POST        | Login to a user's account                       | {    userName: string    userEmail: string    userPassword: string }                                     | {    accessToken: string}                                                                                                                                             | {    userEmail: string    userPassword: string }                     |
| /api/v1/signup                                         | POST        | Create a new user                               | {    userName: string    userEmail: string    userPassword: string }                                     | {    accessToken: string}                                                                                                                                             | {    userName: string    userEmail: string    userPassword: string } |
| /api/v1/users/                                         | PUT         | Edit account details of a specific user         | Header = authorization “accessToken”{    userName: string    userEmail: string    userPassword: string } | {    userName: string    userEmail: string    userPassword: string }                                                                                                  |                                                                      |
| /api/v1/users/passwordchange                           | PUT         | Change a specific user's password               | Header = authorization “accessToken”{    userEmail: string    oldUserPassword: string }                  | {    userEmail: string    oldUserPassword: string     newUserPassword: string    confirmNewUserPassword: string}                                                      | {    userEmail: string    oldUserPassword: string }                  |
| /api/v1/users/passwordreset                            | PUT         | Reset a specific user's password                | Header = authorization “accessToken”{    userEmail: string }                                             | {    userEmail: string     newUserPassword: string    confirmNewUserPassword: string}                                                                                 | {    userEmail: string    oldUserPassword: string }                  |
| /api/v1/users/                                         | DELETE      | Delete a specific user                          | Header = authorization “accessToken”                                                                     | {}                                                                                                                                                                    |                                                                      |

### Explaining the Routes

- [] GET `/api/v1/users/:userID/todos` should retrieve a user's to-do list, status, and due date.
- [] POST `/api/v1/users/:userID/todos` should add a new to-do item to the list.
- [] PUT `/api/v1/users/:userID/todos/:id` should edit a specific to-do item.
- [] DELETE `/api/v1/users/:userID/todos/:id` should delete a specific to-do item from the list.
- [] GET `/api/v1/users/` should give access to a specific user's account.
- [] POST `/api/v1/signup` should sign up a new user.
- [] POST `/api/v1/login` should login to a user's account.
- [] PUT `/api/v1/users/` should edit a specific user's details.
- [] DELETE `/api/v1/users/` should delete a specific user's account.
- [] PUT `/api/v1/users/passwordchange` should allow a user to change their password.
- [] PUT `/api/v1/users/passwordreset` should allow a user to reset their password.

## Database

Database of Momentum contain two tables Users and Todos.

### Database Objects Report

### Table Details Report

#### Table: Users

Users table contain details of each users which need to be registered, such as ID, email, password and userName. Each details includes system types, nullable type and description.

| Index | Name     | System Type | Nullable | Description                       |
| ----- | -------- | ----------- | -------- | --------------------------------- |
| 1     | id       | integer     | required | primary key for users             |
| 2     | email    | string      | required | email type record of each user    |
| 3     | password | string      | required | password type record of each user |
| 4     | userName | text        | required | mame type record of each user     |

#### Table: Todos

Todos table contain details of each todo task which is created by users. Every todo task includes by default ID, todo tas as a text, date when it was creared, status of todo task such as 'done', 'not done' or 'in progress'. The todo task also contains priority status which has statuses 'important', 'urgent', 'regular' etc. Each todo task includes the id of user who created that specific todo task.

| Index | Name     | System Type | Nullable     | Description                                                     |
| ----- | -------- | ----------- | ------------ | --------------------------------------------------------------- |
| 1     | id       | string      | required     | primary key for todo task                                       |
| 2     | text     | string      | required     | todo task of user can be a word or number of words in a string  |
| 3     | date     | datetime    | required     | date time is given when user is create each todo task           |
| 4     | status   | integer     | required     | status of each todo task such as done, not done or in progress  |
| 5     | priority | integer     | not required | priority of each todo task such as important, urgent or regular |
| 6     | user_id  | integer     | required     | each todo task has an id of user who created that todo task     |

#### Constraints of Todos

The constraint of Todos table is connection of each todo task with user's id from Users table.

| Constraint Type | Constraint Name | Constraint Keys   | Description                                           |
| --------------- | --------------- | ----------------- | ----------------------------------------------------- |
| foreign key     | user_id         | id of Users table | each todo task of Todos table connects with user'd id |

### View Details Report

In the tables Users and Todos are five columns, they are index, name, system type, nullable, and description. Index columns shows row's index; name given as a details of user; system type gives an information of types of each property/row, as index given as integer, email and password provided as a string, and in todos table there are rext of todo task, date and etc has their specific system types; nullable collumn tells if that property is required or not. Also, in both of the tables is column description, where indicated the description of each row.

### Stored Procedure Details Report

WIP

### Installation

WIP

## Development Setup

### Methodology Github

#### Step 1

Fork the original project into your local repo and clone the document in your local.
![gitclone](./screenshots/git-clone.PNG)

#### Step 2

Add a new remote to your local repo, this way you will have access to both of the remotes, the original and your fork.
In this case, we call the new remote upstream. The branch stagging in the upstream remote will be the one used to commit the contributions: **git remote add upStream**
![git](./screenshots/remote-add-upstream.PNG)
Now, the project is linked to two remotes, your fork and the original upstream:
![git](./screenshots/remote-v.PNG)

#### Step 3

Work in your fork and commit the changes in your local. When having something enough relevant to push into the upstream repository follow the next steps:

1. Pull the state of the upstream repository stagging branch and merge with your changes in your local with the command: **git pull --rebase upStream branch.** This will automatically merge the state into your local:
![git](./screenshots/rebase.PNG)

2. Push the merged state into your fork:  **git push origin staging.**
![git](./screenshots/push.PNG)

3. Request a pull from to the upstream repository and wait for the approval to merge your contribution into the upstream stagging branch.

### Database prep

- Create the local MySQL database and table(s) to be used by your app.
- Add a `.env` to your root folder containing the MySQL authentication information for the root user as well as the name of your database. For example:
  DB_HOST=localhost
  DB_USER=root
  DB_PASS=YOURPASSWORD
  DB_NAME=YOURDATABASE

### Dependencies

- Run `yarn install` in project directory. This will install server's project dependencies such as `express`.
- `cd client` and run `yarn install`. This will install client dependencies (React).

### Development

- Run `yarn start` in project directory to start the Express server on port 5000
- `cd client` and run `yarn start` to start client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. Yay! (thanks to the `proxy` attribute in `client/package.json` file.)
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000/api`
- If you access `http://localhost:5000` without running a client build first, you will be prompted with an error: Express is trying to serve you the `/client/build/index.html` file, but it hasn't been generated yet.
- if you just want to run the client, you can run `yarn start:client`

### Run Your Build

- `cd client` and run `npm run build`. This will execute `react-build` and create your production build into your `/client/build` directory.
- if you want just to build the client locally, you can execute `yarn build:client`

### Deploy to Heroku

- Make sure you have the [Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) installed
- `heroku login` in your project directory and you'll be directed to Heroku to login with your credentials (you must have an account)
- `heroku create` in your project directory to create the project in Heroku
- `git push heroku master` to run Heroku's magic and deploy to production! This will execute `heroku-postbuild` script on the production serve, which triggers the `react-build` script to create a production build.
- `heroku open` to open your public project's URL in your browser

### Creating a MySQL DB in Heroku

- Setting up a FREE MySQL DB requires to enter a credit card in your account. Go to https://dashboard.heroku.com/account/billing and hit **Add Credit Card**
- You can now add a MySQL add-on to your heroku project. Run `heroku addons:create cleardb:ignite`
- Make sure to read the docs: https://devcenter.heroku.com/articles/cleardb
- Retrieve your DB URL: `heroku config | grep CLEARDB_DATABASE_URL`
- Copy the value and run: `heroku config:set DATABASE_URL='YOUR_VALUE'`
- This is a string in the form of: `mysql://user:pass@host/database`
- You can use those credentials in your .env file if you want to use this production DB in your dev localhost environment, for example:
  DB_HOST=host
  DB_USER=user
  DB_PASS=pass
  DB_NAME=database

## Next steps

- Don't forget to create a `.gitignore` file in your project root and add files such as your `.env` and `/node_modules` directories.
- Modify your code as you please and make sure to commit changes to your own repository!
- Don't forget to import the MySQL helper.js file included in your routes! For example, in index.js, make sure to include `var db = require(“../model/helper”);` to be able to call the `db` function.

---

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/aluis26"><img src="https://avatars3.githubusercontent.com/u/44193260?v=4" width="100px;" alt="aluis26"/><br /><sub><b>aluis26</b></sub></a><br /><a href="https://github.com/CodeOp-tech/fs3_w8-10_final-project/commits?author=aluis26" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/fsdmaster"><img src="https://avatars2.githubusercontent.com/u/27401983?v=4" width="100px;" alt="fsdmaster"/><br /><sub><b>fsdmaster</b></sub></a><br /><a href="https://github.com/CodeOp-tech/fs3_w8-10_final-project/commits?author=fsdmaster" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/emefas"><img src="https://avatars2.githubusercontent.com/u/51632429?v=4" width="100px;" alt="emefas"/><br /><sub><b>emefas</b></sub></a><br /><a href="https://github.com/CodeOp-tech/fs3_w8-10_final-project/commits?author=emefas" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/alejandracabeza"><img src="https://avatars0.githubusercontent.com/u/15079346?v=4" width="100px;" alt="Alejandra"/><br /><sub><b>Alejandra</b></sub></a><br /><a href="https://github.com/CodeOp-tech/fs3_w8-10_final-project/commits?author=alejandracabeza" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

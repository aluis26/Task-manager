# Database: Momemntum

## Datavase Objects Report

## Table Details Report

### Table: Users

Users table contain details of each users which need to be registered, such as ID, email, password and userName. Each details includes system types and description.

| Index | Name     | System Type | Nullable | Description                       |
| ----- | -------- | ----------- | -------- | --------------------------------- |
| 1     | id       | integer     | required | primary key for users             |
| 2     | email    | string      | required | email type record of each user    |
| 3     | password | string      | required | password type record of each user |
| 4     | userName | text        | required | mame type record of each user     |

### Todos table

| Index | Name     | System Type | Nullable     | Description                                                     |
| ----- | -------- | ----------- | ------------ | --------------------------------------------------------------- |
| 1     | id       | string      | required     | primary key for todo task                                       |
| 2     | text     | string      | required     | todo task of user can be a word or number of words in a string  |
| 3     | date     | datetime    | required     | date time is given when user is create each todo task           |
| 4     | status   | integer     | required     | status of each todo task such as done, not done or in progress  |
| 5     | priority | integer     | not required | priority of each todo task such as important, urgent or regular |
| 6     | user_id  | integer     | required     | each todo task has an id of user who created that todo task     |

#### Constraints of Todos

| Constraint Type | Constraint Name | Constraint Keys   | Description                                           |
| --------------- | --------------- | ----------------- | ----------------------------------------------------- |
| foreign key     | user_id         | id of Users table | each todo task of Todos table connects with user'd id |

## View Details Report

## Stored Procedure Details Report

## Installation

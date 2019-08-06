# Database: Momentum

Database of Momentum contain two tables Users and Todos.

## Database Objects Report

## Table Details Report

### Table: Users

Users table contain details of each users which need to be registered, such as ID, email, password and userName. Each details includes system types, nullable type and description.

| Index | Name     | System Type | Nullable | Description                       |
| ----- | -------- | ----------- | -------- | --------------------------------- |
| 1     | id       | integer     | required | primary key for users             |
| 2     | email    | string      | required | email type record of each user    |
| 3     | password | string      | required | password type record of each user |
| 4     | userName | text        | required | mame type record of each user     |

### Table: Todos

Todos table contain details of each todo task which is created by users. Every todo task includes by default ID, todo tas as a text, date when it was creared, status of todo task such as 'done', 'not done' or 'in progress'. The todo task also contains priority status which has statuses 'important', 'urgent', 'regular' etc. Each todo task includes the id of user who created that specific todo task.

| Index | Name     | System Type | Nullable     | Description                                                     |
| ----- | -------- | ----------- | ------------ | --------------------------------------------------------------- |
| 1     | id       | string      | required     | primary key for todo task                                       |
| 2     | text     | string      | required     | todo task of user can be a word or number of words in a string  |
| 3     | date     | datetime    | required     | date time is given when user is create each todo task           |
| 4     | status   | integer     | required     | status of each todo task such as done, not done or in progress  |
| 5     | priority | integer     | not required | priority of each todo task such as important, urgent or regular |
| 6     | user_id  | integer     | required     | each todo task has an id of user who created that todo task     |

### Constraints of Todos

The constraint of Todos table is connection of each todo task with user's id from Users table.

| Constraint Type | Constraint Name | Constraint Keys   | Description                                           |
| --------------- | --------------- | ----------------- | ----------------------------------------------------- |
| foreign key     | user_id         | id of Users table | each todo task of Todos table connects with user'd id |

## View Details Report

In the tables Users and Todos are five columns, they are index, name, system type, nullable, and description. Index columns shows row's index; name given as a details of user; system type gives an information of types of each property/row, as index given as integer, email and password provided as a string, and in todos table there are rext of todo task, date and etc has their specific system types; nullable collumn tells if that property is required or not. Also, in both of the tables is column description, where indicated the description of each row.

## Stored Procedure Details Report

## Installation

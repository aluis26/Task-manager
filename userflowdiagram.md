## User Flow Diagram

![User Flow Diagram](userflow.png)

## Description of use case

## 1. Sign up

The unregister user signs up to acces to functionalities.  
**Requirements:**

Username  
Email  
Password

## 2. Log in

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

## 3. Interact with Todo list.

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

## 4. Log out

1. User press log out button.
2. A model windows is shown with the following text: "Are you sure you want to log out?" and two buttons.
3. User user press "Yes" button to log out and "No" to stay in the dashboard.

# trybewallet

Hello! Welcome to my Trybewallet project repository! In this project, I developed an expense control portfolio with a currency converter. With this application, a user is able to add, remove, and edit expenses, view a table of their expenses, and see total expenses converted to a currency of choice.

## Project description

Trybewallet is an application that allows users to manage their expenses in a simple and efficient way. With it, you can add new expenses, edit or remove existing expenses and view the complete list of expenses. In addition, the application automatically converts the amount spent to a specific currency chosen by the user. Trybewallet uses Redux to manage the application's global state, allowing for a more fluid and consistent user experience.

## Functionalities

- Login Page: I created an initial login page where the user can enter his email and password to access the wallet.
- Portfolio Page: I developed a portfolio page to manage expenses. This page displays the user's e-mail address, total expenses in Brazilian reais (BRL) and the current exchange rate.
- Header: I created a header on the wallet page that displays the user's email and the total expenses in reais.
- Form for Adding Expenses: I developed a form to add new expenses. The form contains fields for the expense amount, description, currency, and payment method.
- Save Expense: I implemented the functionality to save an expense in the global state of the application when clicking on the "Add expense" button. The total amount of expenses is updated in the header.
- Expense Table: I created a table that displays the expenses added by the user. The table is powered by the global state of the application and displays information such as amount, description, currency, payment method and actions to edit or delete an expense.
- Exclude Expense: I implemented the functionality to exclude an expense from the table by clicking on the delete button. The expense is removed from the global state and the total expense amount is updated in the header.
- Edit Expense: I added the functionality to edit an expense in the table by clicking on the edit button. A form is displayed with fields filled in with the selected expense information, allowing the user to make changes. By clicking on "Edit expense", the expense is updated in the global state and the changes are reflected in the table.
- Tests: Developed unit tests to ensure the quality and proper functioning of the application.

## Technologies Used

During the development of this project, I used the following technologies:

- React
- redux
- Unitary tests
- HTML
- CSS

## How to Run the Project

To run the project on your local machine, follow the instructions

  below:

1. Clone this repository.
2. Navigate to the project directory: `cd trybewallet`.
3. Install the project's dependencies: `npm install`.
4. Run the project: `npm start`.
5. Access the application in your browser at `http://localhost:3000`.

## Skills Developed

During the development of this project, I was able to improve the following skills:

- Creation of a Redux store in React applications.
- Creation of reducers in Redux in React applications.
- Creation of actions in Redux in React applications.
- Creation of dispatchers in Redux in React applications.
- Connection of Redux to React components.
- Creation of asynchronous actions in the React application using Redux.

Feel free to explore the project's source code and contribute improvements. If you have any questions, I'm available to help. Have fun using Trybewallet to control your spending!

>>>Project Overview
The User Management Application is a web-based application that enables administrators to manage user records effectively. Users can be added, edited, and deleted through an intuitive interface. The project leverages React.js for the frontend and provides responsive, user-friendly designs for smooth interaction.


>>>Features
User Table Display:
Displays a list of users with fields such as ID, First Name, Last Name, Email, and Department.
Supports pagination for better navigation.

Add User:
Allows administrators to add a new user using a popup form.

Edit User:
Users can edit existing records by clicking on the "Edit" button in the table.

Delete User:
Users can delete a record, and the table updates dynamically.

Pagination:
Displays records in paginated views with customizable page size.

Responsive Design:
Optimized for desktop, tablet, and mobile screens.


>>>Technologies Used
Frontend: React.js
Styling: CSS with responsive media queries
API Communication: Mock API using service functions (fetchUsers, addUser, editUser, deleteUser)
State Management: React Hooks (useState, useEffect)


>>>Key Components

1. UserList
Purpose: Displays the list of users in a table format with action buttons.
Functions:
handleSave: Adds or updates user data.
handleDelete: Deletes a user and updates the state.
handleEdit: Opens the popup form for editing a user.
Pagination:
Dynamically calculates and displays records for the current page.
Buttons for navigating between pages.'

2. UserForm
Purpose: A form popup for adding or editing a user.
Props:
user: Object containing user data to pre-fill the form (for edit).
onSave: Callback to handle form submission.
onCancel: Closes the popup.

4. Service Functions (api.js)
Mock Functions:
fetchUsers: Fetches the initial user data (mocked for demo purposes).
addUser: Adds a new user to the data source.
editUser: Edits existing user data.
deleteUser: Deletes a user by ID.

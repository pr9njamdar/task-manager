# My React Front-end Experience
Answer to Question 1 of assignment [Assignment.pdf](https://github.com/pr9njamdar/task-manager/files/13509834/Assignment.pdf)

# Task Management App 📋✨

A simple React-based Task Management Application with features like task listing, adding, editing, and deleting tasks, along with marking tasks as completed.
## [Demo](https://manage-my-task.netlify.app/)
you can view this app's demo [here](https://manage-my-task.netlify.app/)
## Features

- 📝 **Task List Component:** Display a list of tasks with task names and completion status.
- ✔️ **Task Completion:** Mark tasks as completed with a checkbox.
- 🗑️ **Delete Tasks:** Remove tasks from the list.
- 📅 **Task Details:** View additional details like description and due date.
- 🆕 **Add Task Form:** Modal/form for adding new tasks with name, description, and priority level.
- ✏️ **Edit Task Form:** Modal/form for editing task details.
- 🔄 **Routing:** Implemented using React Router for navigation between task list, add task, and edit task pages.
- 🔄 **State Management:** Utilized React state for managing component-specific functionalities.
- 💾 **LocalStorage:** Tasks are saved in the browser's Local Storage for persistence.
- 🎨 **Styling:** Responsive design with CSS, emphasizing a visually appealing and user-friendly interface.
- ✨ **Animation:** Animated transitions between routes using Framer Motion.
- 📊 **Progress Bar:** Visualize the completion progress with a dynamic progress bar.
- 📊 **Sorting:** Sort tasks based on priority in ascending or descending order.
- 📊 **Pagination:** Display tasks in pages for better navigation.


- **`public/`:** Contains the `index.html` file, the entry point for the React application.
  
- **`src/`:** Holds the main source code of the application.
  - **`components/`:** Organized components that encapsulate specific functionality.
    - `AddTaskForm.js`: Form component for adding new tasks.
    - `EditTaskForm.js`: Form component for editing task details.
    - `TaskItem.js`: Component for rendering individual tasks.
    - `TaskList.js`: Component responsible for rendering the task list.
  - **`styles/`:** Stylesheets for each component.
    - `TaskItem.css`: Styles for the TaskItem component.
    - `TaskList.css`: Styles for the TaskList component.
    - `ProgressBar.css`: Styles for the Progress Bar component.
  - **`App.js`:** The main component that orchestrates the overall structure of the application.
  - **`index.js`:** The entry point where React is initialized and the main component is rendered.

- **`README.md`:** Provides comprehensive information about the project, its features, and how to run it.

- **`package.json`:** Contains metadata about the project and lists its dependencies.

## Design Choices

### React Component Structure

The application is built with a focus on component reusability and separation of concerns. Each major piece of functionality is encapsulated in its own component, making it easier to maintain and extend the codebase.

### Styling

CSS is used for styling components, following a modular approach. Each component has its own stylesheet, promoting a clean and organized styling structure. The use of a responsive design ensures a seamless user experience across different devices.

### State Management

React state is employed within each component to manage their respective functionalities. Context or state lifting is used judiciously to share state between components when necessary.

### Local Storage

Tasks are saved in the browser's local storage, ensuring persistence even after a page refresh. This choice simplifies the need for backend storage and provides a seamless user experience.

### Animation

Framer Motion, a motion library for React, is used to add animated transitions between routes, providing a visually appealing and smooth user interface.

### Progress Bar

A dynamic progress bar is introduced to visualize the completion status of tasks. Framer Motion is utilized to add animations, creating a more engaging user experience.

### Sorting and Pagination

Tasks can be sorted based on priority in ascending or descending order. Pagination is implemented to display tasks in pages, improving navigation for users with large task lists.




## Libraries Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/): Declarative routing for React.js.
- [Framer Motion](https://www.framer.com/motion/): A production-ready motion library for React.
- [Jest](https://jestjs.io/): A delightful JavaScript testing framework.

## How to Run

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd task-management-app`
3. Install dependencies: `npm install`
4. Run the app: `npm start`

## Screenshots
![Screenshot 2023-11-30 010742](https://github.com/pr9njamdar/task-manager/assets/79560640/f463635b-6275-47cd-b82b-14faee1a09a9)
![Screenshot 2023-11-30 010715](https://github.com/pr9njamdar/task-manager/assets/79560640/8d66afc6-6847-4f4c-9ae8-a0c328a1c8ea)
![Screenshot 2023-11-30 010549](https://github.com/pr9njamdar/task-manager/assets/79560640/aa707af0-cedd-4c9f-b327-2e4b01a4cf4d)
![Screenshot 2023-11-30 010346](https://github.com/pr9njamdar/task-manager/assets/79560640/e08049ac-52dc-4a87-97f9-00e2c0e4b321)
![Screenshot 2023-11-30 010056](https://github.com/pr9njamdar/task-manager/assets/79560640/52dbc3a8-7ef2-42bb-ba30-2b14d30d82a9)

<!-- Add your screenshots here -->



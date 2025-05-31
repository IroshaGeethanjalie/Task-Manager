📝 Task Manager Application

A web-based **Task Manager** built using the **MERN stack (MongoDB, Express, React, Node.js)** to streamline task assignment and tracking within an organization. This application is designed to differentiate between Admin and Member roles, allowing only Admins to assign, update, or monitor tasks while Members can view and update the status of tasks assigned to them.

---

## 🚀 Features

- 🔐 Role-based access control (Admin / Member)
- ✅ Admin can:
  - Create and assign tasks to Members
  - Edit or delete existing tasks
  - Track progress and status of all tasks
- 👤 Members can:
  - View tasks assigned to them
  - Update the status of their tasks (e.g., In Progress, Completed)
- 📊 Task dashboard for clear visualization
- 📆 Due dates and status updates for effective tracking

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| MongoDB    | NoSQL database for storing users and tasks |
| Express.js | Backend framework for building REST APIs |
| React.js   | Frontend library for dynamic UI components |
| Node.js    | JavaScript runtime for backend server |

---

## 📁 Project Structure

```bash
task-manager/
├── client/             # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── utils/
├── server/             # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
├── .env
├── package.json
└── README.md

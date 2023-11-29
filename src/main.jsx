import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.jsx';
import TaskProvider from './providers/TaskProvider.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      {" "}
      <RouterProvider router={router} />
    </TaskProvider>
  </React.StrictMode>
);

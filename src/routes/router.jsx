import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import Tasks from "../pages/Tasks page/Tasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "/chat",
        element: <div>Chat</div>,
      },
      {
        path: "/settings",
        element: <div> settings</div>,
      },
      {
        path: "/profile",
        element: <div>Profile</div>,
      },
    
    
    ],
  },
]);

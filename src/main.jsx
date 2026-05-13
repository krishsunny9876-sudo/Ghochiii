import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import RouterConnect from './RouterConnect.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Setting from './Components/Setting.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterConnect />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "setting",
        element: <Setting />
      },
      {
        path: "main",
        element: <App />,
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }],
  {
    basename: "/Ghochiii"
  }
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

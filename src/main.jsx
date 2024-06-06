import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/index.css";

// Import the layouts
import RootLayout from './layouts/RootLayout';

// Import the components
import LandingPage from "./components/LandingPage";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import NoMatch from "./components/NoMatch";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/about", element: <About /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "*", element: <NoMatch /> },
    ]
  }
])

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);

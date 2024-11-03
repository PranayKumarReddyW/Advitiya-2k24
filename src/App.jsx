import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/Home/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Navbar />
          <Signup />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

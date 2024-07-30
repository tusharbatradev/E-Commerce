import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Error from "./Components/Error.jsx";
import Cart from "./Components/Cart.jsx";
import Products from "./Components/Products.jsx";
import ProductDetails from "./Components/ProductDetails.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path : '/',
        element : <Products />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);

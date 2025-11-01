import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Payment from "./components/Payment";
import AddToCart from "./components/AddToCart";

export const router = createBrowserRouter([{
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "product", Component: Product },
      { path: "contact", Component: Contact },
      { path: "payment", Component: Payment },
      { path: "addtocart", Component: AddToCart },
    ]
}])
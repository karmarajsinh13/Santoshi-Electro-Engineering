import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./Components/Home";
import Header from "./Components/Header";
import About from "./Components/About";
import Products from "./Components/Products";
import View_product from "./Components/View_product";

function App() {
  const Layout = () => {
    return (
      <>
        <Header></Header>  
        <Outlet></Outlet>
        
      </>
    );
  };
  const router1 = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/About",
          element: <About></About>,
        },
        {
          path: "/Products",
          element: <Products></Products>,
        },  {
          path: "/View_product",
          element: <View_product></View_product>,
        },


      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router1}></RouterProvider>
    </>
  );
}

export default App;

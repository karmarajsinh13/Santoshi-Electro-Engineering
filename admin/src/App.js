import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Gallery from "./Components/Gallery";
import Add_gallery from "./Components/Add_gallery";
import Add_clients from "./Components/Add_clients";
import Clients from "./Components/Clients";
import Products from "./Components/Products";
import Add_product from "./Components/Add_product";


function App() {
  const Layout = () => {
    return (
      <>
        <Header></Header>  
        <Sidebar></Sidebar>
        <Outlet></Outlet>
        <Footer></Footer>
        
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
          path: "/Gallery",
          element: <Gallery></Gallery>,
        },
        {
          path: "/Add_gallery",
          element: <Add_gallery></Add_gallery>,
        },
        {
          path: "/Add_gallery/:id",
          element: <Add_gallery></Add_gallery>,
        },
        {
          path: "/Clients",
          element: <Clients></Clients>,
        },
        {
          path: "/Add_clients",
          element: <Add_clients></Add_clients>,
        },
        {
          path: "/Add_clients/:id",
          element: <Add_clients></Add_clients>,
        },
        {
          path: "/Products",
          element: <Products></Products>,
        },
        {
          path: "/Add_product",
          element: <Add_product></Add_product>,
        },
        {
          path: "/Add_product/:id",
          element: <Add_product></Add_product>,
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

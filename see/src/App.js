import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./Components/Home";
import Header from "./Components/Header";
import About from "./Components/About";
import Products from "./Components/Products";
import View_product from "./Components/View_product";
import Contactus from "./Components/Contactus";
import Gallery from "./Components/Gallery";
import Clints from "./Components/Clints";
import Viewgallery from "./Components/Viewgallery";

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
        }, {
          path: "/Contactus",
          element: <Contactus></Contactus>,
        }, 
        {
          path: "/Gallery",
          element: <Gallery></Gallery>,
        },
        {
          path: "/Clints",
          element: <Clints></Clints>,
        },
        {
          path: "/Viewgallery",
          element: <Viewgallery></Viewgallery>,
        },
        {
          path: "/Viewgallery/:id",
          element: <Viewgallery></Viewgallery>,
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

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Gallery from "./Components/Gallery";
import Add_gallery from "./Components/Add_gallery";


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

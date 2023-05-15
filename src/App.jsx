import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/footer/Footer'
import {Add,Gig,Gigs,Home,Login,Message,Messages,MyGigs,Register,Order} from './Pages';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
const App = () => {
  const Layout=()=>{
    return (
      <div className='app'>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element:<Home />
        },
        {
          path: "/gigs",
          element:<Gigs />
        },
        {
          path: "/gig/:id",
          element:<Gig />
        },
        {
          path: "/orders",
          element:<Order />
        },
        {
          path: "/login",
          element:<Login />
        },
        {
          path: "/register",
          element:<Register />
        },
        {
          path: "/messages",
          element:<Messages />
        },
        {
          path: "/message/:id",
          element:<Message />
        },
        {
          path: "/add",
          element:<Add />
        },
        {
          path: "/myGigs",
          element:<MyGigs />
        },

      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main/Main';
import Home from './components/Layout/Home/Home';
import ChefDetails from './components/Layout/ChefDetails/ChefDetails';
import AuthProvider from './providers/AuthProvider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main>Hello world!</Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/:id",
        element: <ChefDetails></ChefDetails>,
        loader: ({params}) => fetch(`http://localhost:3000/chef/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)

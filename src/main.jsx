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
import Login from './components/Login_Layout/Login/Login';
import Register from './components/Login_Layout/Login/Register';
import PrivateRoute from './components/Login_Layout/Login/PrivateRoute';


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
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/chef/${params.id}`)

      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
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

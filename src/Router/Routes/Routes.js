import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";

import AddServices from "../../Pages/Home/Services/AddServices";
import AllService from "../../Pages/Home/Services/AllService";
import Details from "../../Pages/Home/Services/Details";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyReviews from "../../Pages/MyReviews/MyReviews"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/allServices',
                element:<AllService></AllService>
            },
            {
                path: '/myReview',
                element: <PrivateRoute><MyReviews></MyReviews> </PrivateRoute>,
                loader:()=>fetch(`http://localhost:5000/reviews`),
                
            },
            
            {
                path:'/service/:id',
                element: <Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/allServices/${params.id}`),
               
            },
            {
                path: '/addServices',
                loader:()=>fetch(`http://localhost:5000/allServices`),
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },


        ]
    }
])

export default router;
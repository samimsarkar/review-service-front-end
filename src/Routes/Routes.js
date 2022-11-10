import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import UpdateReview from "../Pages/MyReviews/UpdateReview/UpdateReview";
import NotFound from "../Pages/NotFound/NotFound";
import Registration from "../Pages/Registration/Registration";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>, loader: () => fetch('http://localhost:5000/services?limit=3&sort=desc')
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Registration></Registration>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/services', element: <Services></Services>
            },
            {
                path: '/services/:id', element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/add-service', element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/update-review/:id',
                element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>
            },
            {
                path: '/add-service', element: <PrivateRoute><h1>Add Service</h1></PrivateRoute>
            },
            {
                path: '*', element: <NotFound></NotFound>
            }
        ]
    }
])

export default router;
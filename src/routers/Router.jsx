import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
// import HomePage from "../pages/HomePage/HomePage";
import MyTask from "../pages/MyTask/MyTask";
import LoginPage from "../pages/LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AddTask from "../pages/AddTask/AddTask";
import UpdateTask from "../pages/UpdateTask/UpdateTask";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            // {
            //     path:'/',
            //     element:<PrivateRoute><HomePage></HomePage></PrivateRoute>
            // },
            {
                path:'/addTask',
                element:<PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path:'/myTask',
                element:<MyTask></MyTask>
            },
            {
                path:'/updateTask/:id',
                element:<UpdateTask></UpdateTask>
            },
            {
                path:'/login',
                element:<LoginPage></LoginPage>
            },
            {
                path:'/singUp',
                element:<SignUpPage></SignUpPage>
            }
        ]
    }
])
export default router
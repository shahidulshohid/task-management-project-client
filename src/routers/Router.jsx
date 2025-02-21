import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
// import HomePage from "../pages/HomePage/HomePage";
import MyTask from "../pages/MyTask/MyTask";
// import CreateProject from "../pages/CreateProject/CreateProject";
// import CreateProjectTwo from "../pages/CreateProject/CreateProjectTwo";
import LoginPage from "../pages/LoginPage/LoginPage";
// import PrivateRoute from "./PrivateRoute";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AddTask from "../pages/AddTask/AddTask";

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
                element:<AddTask></AddTask>
            },
            {
                path:'/myTask',
                element:<MyTask></MyTask>
            },
            // {
            //     path:'/createProject',
            //     element:<CreateProject></CreateProject>
            // },
            // {
            //     path:'/createProjectTwo',
            //     element:<CreateProjectTwo></CreateProjectTwo>
            // },
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
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import MyTask from "../pages/MyTask/MyTask";
import CreateProject from "../pages/CreateProject/CreateProject";
import CreateProjectTwo from "../pages/CreateProject/CreateProjectTwo";
import LoginPage from "../pages/LoginPage/LoginPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<HomePage></HomePage>
            },
            {
                path:'/myTask',
                element:<MyTask></MyTask>
            },
            {
                path:'/createProject',
                element:<CreateProject></CreateProject>
            },
            {
                path:'/createProjectTwo',
                element:<CreateProjectTwo></CreateProjectTwo>
            },
            {
                path:'login',
                element:<LoginPage></LoginPage>
            }
        ]
    }
])
export default router
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import MyTask from "../pages/MyTask/MyTask";

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
            }
        ]
    }
])
export default router
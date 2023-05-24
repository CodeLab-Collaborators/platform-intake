import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/block/Layout"
import View from "../pages/View"
import Error from "../error/Error"
import SignUp from "../pages/Register/SignUp"
import SignIn from "../pages/Register/SignIn"
import ForgotPassword from "../pages/Register/ForgotPassword"
import ChangePassword from "../pages/Register/ChangePassword"
import HomeScreen from "../pages/Home/HomeScreen"

export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <View />
            },
            {
                path: 'sign-up',
                element: <SignUp />
            },
            {
                path: 'sign-in',
                element: <SignIn />
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />
            },
            {
                path: 'change-password',
                element: <ChangePassword />
            },
            {
                path: "/home",
                element: <HomeScreen />
            },
            {
                path: "*",
                element: <Error />
            },
        ]
    }
])
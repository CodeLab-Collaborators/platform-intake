import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/block/Layout"
import View from "../pages/View"
import Error from "../error/Error"
import SignUp from "../pages/Register/SignUp"
import SignIn from "../pages/Register/SignIn"
import ForgotPassword from "../pages/Register/ForgotPassword"
import ChangePassword from "../pages/Register/ChangePassword"
import HomeScreen from "../pages/Home/HomeScreen"
import MainLayout from "../components/block/MainLayout"
import MainPage from "../pages/MainPage/MainPage"
import StartTest from "../pages/Test/TestPage"
import TestPage from "../pages/TestPage"
import TimelineElements from "../pages/Test/TimelineElements"
import MainView from "../pages/Register/Intructors/MainView"
import IntructorsLayout from "../components/block/IntructorsLayout"
import InstructorsView from "../pages/Register/Intructors/IntructorsView"
import LogicalScreen from "../pages/Register/Intructors/LogicalScore"
import LeadershipScreen from "../pages/Register/Intructors/LeadershipScreen"
import PsychologicalScreen from "../pages/Register/Intructors/PsychologicalScreen"

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
    },

    {
        path: "/auth",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <MainPage />
            },

            {
                path: "start-test",
                element: <StartTest />
            },
            {
                path: "test-screen",
                element: <TestPage />
            },
            {
                path: "timeline",
                element: <TimelineElements />
            }, {
                path: "*",
                element: <Error />
            },
        ]
    },

    {
        path: "/intructors",
        element: <IntructorsLayout />,
        children: [
            {
                index: true,
                element:
                    <InstructorsView>
                        <MainView />
                    </InstructorsView>

            },
            {

                path: "logical",
                element:
                    <InstructorsView>
                        <LogicalScreen />
                    </InstructorsView>


            },
            {
                path: "leadership",
                element: <InstructorsView>
                    <LeadershipScreen />
                </InstructorsView>
            },
            {
                path: "psychological",
                element: <InstructorsView>
                    <PsychologicalScreen />
                </InstructorsView>
            }, {
                path: "*",
                element: <Error />
            },

        ]
    },
])
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Page404 from "../Pages/Page404/Page404";
import ProDetails1 from "../Pages/Projects/ProDetails1/ProDetails1";
import ProDetails2 from "../Pages/Projects/ProDetails2/ProDetails2";
import ProDetails3 from "../Pages/Projects/ProDetails3/ProDetails3";
import Projects from "../Pages/Projects/Projects";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/project1',
                element: <ProDetails1></ProDetails1>
            },
            {
                path: '/project2',
                element: <ProDetails2></ProDetails2>
            },
            {
                path: '/projects/project2',
                element: <ProDetails2></ProDetails2>
            },
            {
                path: '/project3',
                element: <ProDetails3></ProDetails3>
            },
            {
                path: '/projects/project3',
                element: <ProDetails3></ProDetails3>
            },
        ]
    },
    {
        path: '*',
        element: <Page404></Page404>
    }
]);

export default router;
import React from 'react';
import ReactDOM  from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Homepage from './comps/Homepage';
import Posts from './comps/Posts';
import Profile from './comps/Profile';
import ErrorPage from './comps/errorElem';
import BigPost from './comps/BlowUpPost';
import RegisterForm from './comps/Register';
import LoginForm from './comps/Login';
import Page from './comps/Index';
import MakePostForm from './comps/MakePost';
import ProfilePost from './comps/ProfilePost';
import editForm from './comps/editPost';
import Logout from './comps/Logout';
import MessageUser from './comps/MessageUser';
const route = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,

        children:[
            {
                index: true,
                element: <Page />
            },
            {
                path: "/posts",
                element: <Posts />
            },
            {
                path: '/posts/:id',
                element: <BigPost />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/profile/:id',
                element: <ProfilePost />
            },
            {
                path: '/profile/:id/msg',
                element: <MessageUser />
            },
            {
                path: '/profile/newpost',
                element: <MakePostForm />
            },
            {
                path: '/register',
                element: <RegisterForm />
            },
            {
                path: '/login',
                element: <LoginForm />
            },
            {
                path: '/logout',
                element: <Logout />
            }

            
        ]
    }

])


ReactDOM.render(<RouterProvider router={route} />, document.getElementById('app'));


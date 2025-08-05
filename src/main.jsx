import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ErrorPage from './Components/ErrorPage/ErrorPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import BookDetails from './Components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/books/:bookId',
        loader: ()=>fetch('/public/data/booksData.json'),
        element: <BookDetails></BookDetails>
      },
      {
        path:'/dashboard',
        element: <DashBoard></DashBoard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

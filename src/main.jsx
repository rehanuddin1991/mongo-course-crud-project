import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import CoursePage from './Pages/CoursePage.jsx';
import { Toaster } from 'react-hot-toast';
import EditCourse from './Pages/EditCourse.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/course",
    element: <CoursePage/>,
    loader: () => fetch("http://localhost:5000/courses"),
  },
  {
    path: "/course_edit/:id",
    element: <EditCourse/>,
    loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`),
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster    position="top-right"
    />

    </StrictMode>,
)

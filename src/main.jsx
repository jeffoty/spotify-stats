import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'
import ErrorPage from './error-page.jsx';
import TracksPage from './routes/TracksPage.jsx';
import Home from './routes/Home.jsx';
import RecentTracks from './routes/RecentTracks.jsx';
import TopArtists from './routes/TopArtists.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/tracks",
        element: <TracksPage/>,
      },
      {
        path: "/recent-tracks",
        element: <RecentTracks/>,
      },
      {
        path: "/artists",
        element: <TopArtists/>,
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Practice from './pages/Practice.jsx'
import Flashcard from './pages/Newcard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: 'create',
        element: <Flashcard />
      }, {
        path: 'practice',
        element: <Practice />
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
);

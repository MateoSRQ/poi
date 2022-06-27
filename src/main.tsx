import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app'
import App1 from './pages/app1'
import App2 from './pages/app2'
import Login from './pages/login'
import Root from './pages/root'
import './index.css'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <Root />
      </BrowserRouter>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app'
import App1 from './pages/app1'
import App2 from './pages/app2'
import Login from './pages/login'
import './index.css'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/app2" element={<App2 />} />
              <Route path="/app1" element={<App1 />} />
              <Route path="/app" element={<App />} />
              <Route path="/" element={<Login />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app'
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
              <Route path="/app" element={<App />} />
              <Route path="/" element={<Login />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)

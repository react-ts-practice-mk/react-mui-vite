import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from '@/routes/index';
// import '@/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import routes from '@/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.layout><route.component /></route.layout>}
          />
        ))}
      </Routes>
    </Router>
  </React.StrictMode>,
)

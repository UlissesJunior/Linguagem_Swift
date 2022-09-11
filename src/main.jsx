import React from 'react'
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById("root"))
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/App'
import Aulas from './pages/Aulas';

root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" exact={true} element={<App />}></Route>
        <Route path="/aulas" exact={true} element={<Aulas />}></Route>
    </Routes>
  </BrowserRouter>
);
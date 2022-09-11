import React from 'react'
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById("root"))
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/App'
import Aulas from './pages/Aulas';
import Docs from './pages/Document'
import Membros from './pages/Membros';

root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" exact={true} element={<App />}></Route>
        <Route path="/aulas" exact={true} element={<Aulas />}></Route>
        <Route path="/swift" exact={true} element={<Docs />}></Route>
        <Route path="/docs" exact={true} element={<Docs />}></Route>
        <Route path="/membros" exact={true} element={<Membros />}></Route>
    </Routes>
  </BrowserRouter>
);
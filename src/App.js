import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Accueil from "./pages/accueil";
import Dashboard from "./pages/dashboard";

import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Accueil />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      </Routes>
      );
}

export default App;
      
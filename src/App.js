import "./App.css";

// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrowseModels from "./components/BrowseModels";
import ModelDetail from "./components/ModelDetail";
import TryModel from "./components/TryModel";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BrowseModels />} />
          <Route path="/models/:id" element={<ModelDetail />} />
          <Route path="/try/:id" element={<TryModel />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

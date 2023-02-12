import "./App.css";
import React from "react";
import List from "./components/List";
import Form from "./components/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/view-list" element={<List />} />
        <Route path="*" element={<Form />} />

      </Routes>
    </Router>
    
  );
}

export default App;

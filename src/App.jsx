import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import ProjectDetails from './Components/ProjectDetails'
import Expense from "./Components/Expense";
import Main from './Pages/Main'


const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/myportfolio" element={<ProjectDetails />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </div>
  );
}

export default App
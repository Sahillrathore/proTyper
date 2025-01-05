import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TypingTest from "./pages/TypingTest";
import Leaderboard from "./components/Leaderboard";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<TypingTest />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  </Router>
);

export default App;

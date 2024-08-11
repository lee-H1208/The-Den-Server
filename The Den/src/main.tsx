import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Daily from "./pages/Daily";
import Weekly from "./pages/Weekly";
import Study from "./pages/Study";
import Journal from "./pages/Journal";
import Finances from "./pages/Finances";
import Login from "./pages/Login";

import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/weekly" element={<Weekly />} />
      <Route path="/study" element={<Study />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/finances" element={<Finances />} />
    </Routes>
  </BrowserRouter>
);

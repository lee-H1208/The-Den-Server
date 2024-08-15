import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Register from "./pages/Register";
import Daily from "./pages/Daily";
import Weekly from "./pages/Weekly";
import Study from "./pages/Study";
import Journal from "./pages/Journal";
import Finances from "./pages/Finances";
import Login from "./pages/Login";
import { UserContextProvider } from "../context/userContext";
import { Toaster } from "react-hot-toast";

import "./css/index.css";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = false;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <UserContextProvider>
    <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
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
  </UserContextProvider>
);

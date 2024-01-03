import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/login/Login";
import SignUp from "../components/signUp/SignUp";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
export default function MyRoutes() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.displayName);
      } else {
        setUser("");
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home name={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

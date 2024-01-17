import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Message from "./pages/Message";
import LayoutLogin from "./components/layout/LayoutLogin";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutLogin />}>
          <Route index element={<Login />} />
          <Route path="register/" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoute isPermition={true} />}>
          <Route path="/chat" element={<Message />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

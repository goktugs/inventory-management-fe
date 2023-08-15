import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
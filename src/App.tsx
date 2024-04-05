import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Login from "./shared/login/login";

function App() {
  const isLoggedIn = () => {
    // Implement your logic to check if the user is logged in
    // This could involve checking local storage, cookies, or a global state management solution
    return localStorage.getItem("isLoggedIn") === "true";
  };
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route  path="/" element={isLoggedIn() ? <Layout /> : <Navigate to="/login" replace />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

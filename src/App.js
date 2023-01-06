import Register from "./pages/Register";
import Home from "./pages/Home";
import ActualHome from "./pages/ActualHome";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="chat" element={<Home/>}></Route>
          <Route path="actualhome" element={<ActualHome/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

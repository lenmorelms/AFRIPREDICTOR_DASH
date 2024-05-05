import React, { useRef } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import HomeScreen from "./screens/HomeScreen";
import UsersScreen from "./screens/UsersScreen";
import AddUserScreen from "./screens/AddUserScreen";
import UserEditScreen from "./screens/EditUserScreen";
import TournamentsScreen from "./screens/TournamentsScreen";
import AddZimpslScreen from "./screens/AddZimpslScreen";
import ZimpslScreen from "./screens/ZimpslScreen";
import ZimpslGameweekScreen from "./screens/ZimpslGameweekScreen";
function App() {
  var user = useRef(localStorage.getItem('userInfo'));
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={ user ? <HomeScreen /> : <Navigate to="/login" replace />} />
          <Route path="/tournaments" element={ user ? <TournamentsScreen /> : <Navigate to="/login" replace />} />
          {/* USERS */}
          <Route path="/users" element={user ? <UsersScreen /> : <Navigate to="/login" replace />} />
          <Route path="/addusers" element={user ? <AddUserScreen /> : <Navigate to="/login" replace />} />
          <Route path="/users/:id/edit" element={user ? <UserEditScreen /> : <Navigate to="/login" replace />} />
          <Route path="/users/search/:keyword" element={user ? <UsersScreen /> : <Navigate to="/login" replace />} />
          <Route path="users/page/:pagenumber" element={user ? <UsersScreen /> : <Navigate to="/login" replace />} />
          {/* ZIMPSL */}
          <Route path="/addzimpsl" element={user ? <AddZimpslScreen /> : <Navigate to="/login" replace />} />
          <Route path="/zimpsl" element={user ? <ZimpslScreen /> : <Navigate to="/login" replace />} />
          <Route path="/zimpsl/:gameweek" element={user ? <ZimpslGameweekScreen /> : <Navigate to="/login" replace />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

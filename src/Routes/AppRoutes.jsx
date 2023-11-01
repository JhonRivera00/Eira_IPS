import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "../Pages/Inicio";
import Nav from "../components/Nav";
import Login from "../Pages/Login";
import Sidebar from "../components/Sidebar";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/ini" element={<Nav />}></Route>
      <Route path="inicio" element={<Sidebar />}>
        <Route index element={<Inicio />}></Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;

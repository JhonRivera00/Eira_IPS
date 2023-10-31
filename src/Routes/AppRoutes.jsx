import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "../Pages/Inicio";
import Nav from "../components/Nav";
import Login from '../Pages/Login'
import Sidebar from "../components/Sidebar";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/inicio" element={<Nav />}>
        <Route index element={<Inicio />}></Route>
      </Route>
      <Route path="sidebar" element={<Sidebar/>}></Route>
    </Routes>
  );
}

export default AppRoutes;

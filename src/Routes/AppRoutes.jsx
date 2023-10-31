import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Inicio from "../Pages/Inicio";
import Nav from "../components/Nav";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/inicio" element={<Nav />}>
        <Route index element={<Inicio />}></Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;

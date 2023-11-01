import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Login from '../Pages/Login';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="inicio" element={<Sidebar />}>
        {/* <Route index element={<Inicio />}></Route> */}
      </Route>
    </Routes>
  );
}

export default AppRoutes;

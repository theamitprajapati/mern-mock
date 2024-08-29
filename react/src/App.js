import React from "react";
import Layouts from "./pages/Layouts";
import Dashboard from "./pages/Dashboard";
import Privilege from "./pages/Privilege";
import Organization from "./pages/Organization";
import Role from "./pages/Role";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* <Route index element={<Home />} /> */}
        <Route element={<Layouts />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/privilege" element={<Privilege />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/role" element={<Role />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

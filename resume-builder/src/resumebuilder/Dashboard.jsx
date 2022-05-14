import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
}

export default Dashboard;

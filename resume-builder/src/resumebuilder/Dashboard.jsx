import React from "react";
import Header from "./Components/Header";
import { Outlet, useMatch } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function Dashboard() {
  const match = useMatch("/");

  return (
    <React.Fragment>
      <Header />
      <Outlet />
      {match && <Home />}
      <Footer />
    </React.Fragment>
  );
}

export default Dashboard;

import Dashboard from "./resumebuilder/Dashboard";
import { useRoutes, useLocation } from "react-router-dom";
import Templates from "./resumebuilder/Components/Templates";
import SampleResume from "./resumebuilder/Components/SampleResume";
import EditTemplate from "./resumebuilder/Components/EditTemplate";
import ReactGA from "react-ga4";
import React, { useEffect } from "react";

ReactGA.initialize("G-NKH1LJ0QTT");

function App() {
  const location = useLocation();
  useEffect(() => {
    // ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: location.pathname,
    });
  }, [location]);

  let element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "templates",
          element: <Templates />,
        },
        {
          path: "template/:id",
          element: <EditTemplate />,
        },
        {
          path: "sample/resume",
          element: <SampleResume />,
        },
      ],
    },
  ]);

  return element;
}

export default App;

import Dashboard from "./resumebuilder/Dashboard";
import { useRoutes } from "react-router-dom";
import Templates from "./resumebuilder/Components/Templates";
import SampleResume from "./resumebuilder/Components/SampleResume";
import EditTemplate from "./resumebuilder/Components/EditTemplate";

function App() {
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

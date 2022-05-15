import Dashboard from "./resumebuilder/Dashboard";
import { Routes, Route, useRoutes } from "react-router-dom";
import Templates from "./resumebuilder/Components/Templates";
import TempProf from "./resumebuilder/Components/TempProf";
import SampleResume from "./resumebuilder/Components/SampleResume";

// function App() {
//   return (
//         <Routes>
//           <Route path="/" element={<Dashboard />}>
//             <Route path="/edit" element={<Edit />} />
//           </Route>
//         </Routes>
//   );
// }

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
          path: "template/1",
          element: <TempProf />,
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

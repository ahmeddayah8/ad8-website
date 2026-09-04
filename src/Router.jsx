import { createBrowserRouter } from "react-router";
import App from "./App";

import Properties from "./Pages/Properties";
import PropertyDetails from "./Pages/PropertyDetails";
import Agents from "./Pages/Agents";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NotFound from "./Componants/NotFound";
import AgentDetails from "./Pages/AgentDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "properties",
        element: <Properties />,
      },
      {
        path: "properties/:propertyId",
        element: <PropertyDetails />,
      },
      {
        path: "agents",
        element: <Agents />,
      },
      {
        path: "agents/:agentId",
        element: <AgentDetails />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;

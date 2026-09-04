import { Outlet } from "react-router";
import "./App.css";
import Nav from "./Componants/nav";
import Footer from "./Componants/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

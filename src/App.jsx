import { Outlet } from "react-router";
import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

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

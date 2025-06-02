import { Outlet } from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
};
export default App;

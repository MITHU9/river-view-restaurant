import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="text-3xl font-bold text-amber-300">
      <Outlet />
    </div>
  );
};
export default App;

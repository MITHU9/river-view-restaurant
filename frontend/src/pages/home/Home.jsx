import Carousal from "./components/Carousal";
import FavoriteMenu from "./components/FavoriteMenu";
import MenuSection from "./components/Menu";
import WelcomeSection from "./components/Welcome";

const Home = () => {
  return (
    <div>
      <Carousal />
      <WelcomeSection />
      <FavoriteMenu />
      <MenuSection />

      {/* Add more sections as needed */}
    </div>
  );
};
export default Home;

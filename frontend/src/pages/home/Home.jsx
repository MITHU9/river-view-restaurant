import Carousal from "./components/Carousal";
import FavoriteMenu from "./components/FavoriteMenu";
import MenuSection from "./components/Menu";
import RestaurantSection from "./components/SubHero";
import WelcomeSection from "./components/Welcome";

const Home = () => {
  return (
    <div>
      <Carousal />
      <WelcomeSection />
      <RestaurantSection />
      <FavoriteMenu />
      <MenuSection />

      {/* Add more sections as needed */}
    </div>
  );
};
export default Home;

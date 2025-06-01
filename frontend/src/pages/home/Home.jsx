import Footer from "../../components/Footer";
import FavoriteMenu from "./components/FavoriteMenu";
import Hero from "./components/Hero";
import MenuSection from "./components/Menu";
import WelcomeSection from "./components/Welcome";

const Home = () => {
  return (
    <div>
      <Hero />
      <WelcomeSection />
      <FavoriteMenu />
      <MenuSection />
      <Footer />
      {/* Add more sections as needed */}
    </div>
  );
};
export default Home;

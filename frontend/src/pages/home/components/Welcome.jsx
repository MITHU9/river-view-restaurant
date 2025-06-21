import { Bookmark, Star, Calendar } from "lucide-react";
import InfoCard from "../../../components/WelcomeCard";

export default function WelcomeSection() {
  return (
    <section className="bg-[#2d0600] text-white py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-orange-500 mb-2">
          Welcome!
        </h1>
        <p className="text-sm text-white/80">
          Welcome to a place where every bite tells a story and every moment
          feels like home.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-8 px-4">
        <InfoCard
          icon={Bookmark}
          title="Find Your Favorite"
          description="Discover the joy of choosing what speaks to you. Whether it’s a dish, a style, or a moment, finding your favorite is about connecting with what truly delights your senses and brightens your day."
        />
        <InfoCard
          icon={Star}
          title="Best Seller"
          description="Discover the joy of choosing what speaks to you. Whether it’s a dish, a style, or a moment, finding your favorite is about connecting with what truly delights your senses and brightens your day."
        />
        <InfoCard
          icon={Calendar}
          title="Reservation"
          description="Discover the joy of choosing what speaks to you. Whether it’s a dish, a style, or a moment, finding your favorite is about connecting with what truly delights your senses and brightens your day."
        />
      </div>
    </section>
  );
}

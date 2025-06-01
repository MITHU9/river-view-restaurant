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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-8 px-4">
        <InfoCard
          icon={Bookmark}
          title="Find Your Favorite"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <InfoCard
          icon={Star}
          title="Best Seller"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <InfoCard
          icon={Calendar}
          title="Reservation"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </section>
  );
}

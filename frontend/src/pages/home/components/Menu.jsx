import MenuItem from "../../../components/MenuItem";
import SectionTitle from "../../../components/SectionTitle";

export const menuItems = [
  {
    name: "Roast Duck Breast",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "$14.5",
    image: "/pizza-bg.jpg",
  },
  {
    name: "Tuna Niçoise",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "$14.5",
    image: "/pizza-bg.jpg",
  },
  {
    name: "Escalope de Veau",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "$14.5",
    image: "/pizza-bg.jpg",
  },
  {
    name: "Chicken and Walnut Salad",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "$14.5",
    image: "/pizza-bg.jpg",
  },
  {
    name: "Fish Parmentier",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "$14.5",
    image: "/pizza-bg.jpg",
  },
  {
    name: "Roasted Pork Belly",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "$14.5",
    image: "/pizza-bg.jpg",
  },
];

const MenuSection = () => {
  return (
    <div className="bg-[#2D0900]">
      <div className="w-full max-w-5xl mx-auto py-16 px-4">
        <SectionTitle subtitle="Check it out" title="FROM OUR MENU" />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="uppercase tracking-widest text-sm border-b border-stone-400 pb-1 hover:border-stone-600 transition-all duration-300 font-medium rounded-b-xl px-2 py-2 cursor-pointer">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;

import MenuItem from "../../components/MenuItem";
import SectionTitle from "../../components/SectionTitle";

export const menuItems = [
  {
    name: "Roast Duck Breast",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "14.5",
    image: "/pizza-bg.jpg",
  },
  {
    name: "Tuna Niçoise",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "14.5",
    image: "/salad-bg.jpg",
  },
  {
    name: "Escalope de Veau",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "14.5",
    image: "/soup-bg.jpg",
  },
  {
    name: "Chicken and Pizza Salad",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "14.5",
    image: "/pizza-bg.jpg",
  },
  {
    name: "Fish Parmentier",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "14.5",
    image: "/pizza-bg.jpg",
  },
  {
    name: "Roasted Pork Belly",
    description:
      "Roasted duck breast (served pink) with gratin potato and a prontine cherry sauce",
    price: "14.5",
    image: "/pizza-bg.jpg",
  },
];

const MenuPage = () => {
  return (
    <div>
      <div className="bg-[#3A0C01] bg-center h-28 flex items-center justify-center text-white text-4xl ">
        Our Menu
      </div>
      <div className="bg-[#2D0900]">
        <div className="w-full max-w-5xl mx-auto py-16 px-4">
          <SectionTitle subtitle="Check it out" title="Italian Food" />

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
        </div>
      </div>
      <div className="bg-[#2D0900]">
        <div className="w-full max-w-5xl mx-auto py-16 px-4">
          <SectionTitle subtitle="Check it out" title="Chinese Food" />

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
        </div>
      </div>
      <div className="bg-[#2D0900]">
        <div className="w-full max-w-5xl mx-auto py-16 px-4">
          <SectionTitle subtitle="Check it out" title="Thai Food" />

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
        </div>
      </div>
    </div>
  );
};
export default MenuPage;

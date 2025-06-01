const MenuItem = ({ name, description, price, image }) => {
  return (
    <div className="flex items-start group">
      <div className="w-24 h-24  flex-shrink-0 overflow-hidden transition-all duration-300 group-hover:shadow-md">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center border border-amber-400"
          loading="lazy"
        />
      </div>

      <div className="flex-1 pl-4">
        <div className="flex justify-between items-baseline border-b border-dashed border-stone-200 pb-1 mb-2">
          <h3 className="font-serif uppercase text-stone-300 tracking-wider text-sm font-medium group-hover:text-stone-400 transition-colors duration-300">
            {name} ---------------
          </h3>
          <span className="text-amber-600 text-lg font-medium">{price}</span>
        </div>
        <p className="text-stone-400 text-sm leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;

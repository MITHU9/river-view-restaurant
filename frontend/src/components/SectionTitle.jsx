const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-2">
        <div className="h-px w-16 bg-stone-300"></div>
        <p className="mx-3 text-yellow-400 italic font-serif text-sm">
          {subtitle}
        </p>
        <div className="h-px w-16 bg-stone-300"></div>
      </div>

      <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-yellow-500 mb-3">
        {title}
      </h2>

      <div className="h-px w-40 mx-auto bg-stone-200"></div>
    </div>
  );
};

export default SectionTitle;

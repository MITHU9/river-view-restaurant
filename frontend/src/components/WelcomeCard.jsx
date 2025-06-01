export default function InfoCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white text-black p-6 shadow-md flex items-start gap-4 flex-1">
      <Icon className="text-orange-600 w-12 h-12 shrink-0" fill="#e44d26" />
      <div>
        <h3 className="text-2xl font-semibold text-orange-600 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

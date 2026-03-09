export default function ContentPage({ title, children }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 w-full">
      <h1 className="text-2xl font-bold text-white mb-8">{title}</h1>
      <div className="text-gray-300 text-sm leading-relaxed space-y-6">
        {children}
      </div>
    </div>
  );
}

export default function ContentPage({ title, children }) {
  return (
    <div className="flex-1 px-4 py-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-text-main mb-6">{title}</h1>
        <div className="text-text-sub text-sm leading-relaxed space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}

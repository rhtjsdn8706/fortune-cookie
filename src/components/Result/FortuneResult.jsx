export default function FortuneResult({ fortune }) {
  if (!fortune) return null;

  return (
    <div className="w-full max-w-md mx-auto">
      {/* 운세 본문 */}
      <div className="bg-gray-800/80 backdrop-blur rounded-3xl p-6 mb-6 border border-gray-700/50">
        <h3 className="text-purple-400 text-sm font-semibold mb-4 tracking-wider">
          오늘의 운세
        </h3>
        <div className="space-y-4">
          <p className="text-gray-200 leading-relaxed text-[15px]">{fortune.intro}</p>
          <p className="text-white leading-relaxed text-[15px] font-medium">{fortune.core}</p>
          <p className="text-gray-300 leading-relaxed text-[15px] italic">{fortune.closing}</p>
        </div>
      </div>

      {/* 행운 키워드 */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-gray-800/60 rounded-2xl p-4 text-center border border-gray-700/30">
          <span className="text-2xl mb-1 block">🎨</span>
          <span className="text-xs text-gray-400 block mb-1">행운의 색</span>
          <span className="text-sm text-white font-medium">{fortune.lucky.color}</span>
        </div>
        <div className="bg-gray-800/60 rounded-2xl p-4 text-center border border-gray-700/30">
          <span className="text-2xl mb-1 block">🔢</span>
          <span className="text-xs text-gray-400 block mb-1">행운의 숫자</span>
          <span className="text-sm text-white font-medium">{fortune.lucky.number}</span>
        </div>
        <div className="bg-gray-800/60 rounded-2xl p-4 text-center border border-gray-700/30">
          <span className="text-2xl mb-1 block">⏰</span>
          <span className="text-xs text-gray-400 block mb-1">행운의 시간</span>
          <span className="text-sm text-white font-medium">{fortune.lucky.time}</span>
        </div>
      </div>
    </div>
  );
}

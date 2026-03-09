import { useState } from 'react';

export default function FortuneResult({ fortune }) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  if (!fortune) return null;

  const { short, detail, lucky } = fortune;

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
      {/* ── 짧은 점사 카드 ── */}
      <div className="bg-bg-card border border-purple rounded-2xl p-6 mb-6 glow-purple">
        <p className="text-purple-light text-xs font-bold tracking-widest mb-4">
          ✦ 오늘의 점사
        </p>
        {short.split('\n').map((line, i) => (
          <p
            key={i}
            className="text-text-main text-lg leading-[2.0] tracking-wide"
          >
            {line}
          </p>
        ))}
      </div>

      {/* ── 행운의 키워드 ── */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-lucky rounded-xl p-3 text-center">
          <span className="text-2xl block mb-1">🎨</span>
          <span className="text-xs text-black/60 block">행운의 색</span>
          <span className="text-sm text-black font-bold">{lucky.color}</span>
        </div>
        <div className="bg-lucky rounded-xl p-3 text-center">
          <span className="text-2xl block mb-1">🔢</span>
          <span className="text-xs text-black/60 block">행운의 숫자</span>
          <span className="text-sm text-black font-bold">{lucky.number}</span>
        </div>
        <div className="bg-lucky rounded-xl p-3 text-center">
          <span className="text-2xl block mb-1">⏰</span>
          <span className="text-xs text-black/60 block">행운의 시간</span>
          <span className="text-sm text-black font-bold">{lucky.time}</span>
        </div>
      </div>

      {/* ── 상세 해석 토글 ── */}
      <button
        onClick={() => setIsDetailOpen(!isDetailOpen)}
        className="w-full py-3 text-center text-purple-light text-sm font-semibold border border-border-card rounded-xl mb-4 hover:bg-bg-card/50 transition-colors"
      >
        오늘의 상세 해석 보기 {isDetailOpen ? '▲' : '▼'}
      </button>

      {isDetailOpen && (
        <div className="bg-bg-card rounded-2xl p-6 border border-border-card mb-6 animate-fade-in space-y-6">
          <DetailSection icon="📌" label="오늘의 총운" text={detail.general} />
          <div className="border-t border-border" />
          <DetailSection icon="💰" label="재물운" text={detail.wealth} />
          <div className="border-t border-border" />
          <DetailSection icon="💜" label="관계운" text={detail.relation} />
          <div className="border-t border-border" />
          <DetailSection icon="🌿" label="건강·컨디션" text={detail.health} />
        </div>
      )}
    </div>
  );
}

function DetailSection({ icon, label, text }) {
  return (
    <div>
      <p className="text-purple-light text-xs font-bold tracking-widest mb-3">
        {icon} {label}
      </p>
      {text.split('\n').map((line, i) => (
        <p key={i} className="text-text-detail text-[0.95rem] leading-[1.9]">
          {line}
        </p>
      ))}
    </div>
  );
}

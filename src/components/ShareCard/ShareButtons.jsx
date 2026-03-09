import { useState } from 'react';

export default function ShareButtons({ fortune }) {
  const [copied, setCopied] = useState(false);

  const shortFirst = fortune.short.split('\n')[0];
  const shareText = `행운신령 결과\n\n${shortFirst}\n\n행운의 색: ${fortune.lucky.color} | 숫자: ${fortune.lucky.number} | 시간: ${fortune.lucky.time}\n\n나도 운세 보기: ${window.location.origin}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '행운신령 — 내 운세 결과',
          text: shareText,
          url: window.location.origin,
        });
      } catch {
        // 사용자가 취소한 경우
      }
    } else {
      handleCopy();
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 접근 불가
    }
  };

  return (
    <div className="w-full max-w-md mx-auto flex gap-3">
      <button
        onClick={handleShare}
        className="flex-1 py-3 bg-bg-card text-text-main rounded-xl text-sm font-semibold border border-border-card hover:border-purple transition-all active:scale-[0.98]"
      >
        📤 공유하기
      </button>
      <button
        onClick={handleCopy}
        className="flex-1 py-3 bg-bg-card text-text-sub rounded-xl text-sm border border-border-card hover:border-purple transition-all active:scale-[0.98]"
      >
        {copied ? '✅ 복사 완료!' : '📋 링크 복사'}
      </button>
    </div>
  );
}

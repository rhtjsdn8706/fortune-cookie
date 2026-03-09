import { useState } from 'react';

export default function ShareButtons({ fortune }) {
  const [copied, setCopied] = useState(false);

  const shareText = `🥠 오늘의 포춘쿠키 결과\n\n${fortune.intro}\n\n행운의 색: ${fortune.lucky.color} | 숫자: ${fortune.lucky.number} | 시간: ${fortune.lucky.time}\n\n👉 나도 운세 보기: ${window.location.origin}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '오늘의 포춘쿠키 — 내 운세 결과',
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
    <div className="w-full max-w-md mx-auto space-y-3">
      <button
        onClick={handleShare}
        className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all"
      >
        친구에게 공유하기
      </button>
      <button
        onClick={handleCopy}
        className="w-full py-3 bg-gray-800 text-gray-300 rounded-2xl text-sm hover:bg-gray-700 active:scale-[0.98] transition-all border border-gray-700"
      >
        {copied ? '✅ 복사 완료!' : '📋 링크 복사'}
      </button>
    </div>
  );
}

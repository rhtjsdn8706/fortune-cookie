import { useLocation, useNavigate } from 'react-router-dom';
import FortuneResult from '../components/Result/FortuneResult';
import ShareButtons from '../components/ShareCard/ShareButtons';
import useFortune from '../hooks/useFortune';
import { getZodiac, getZodiacFortune } from '../data/zodiac';

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const { birthDate, answers } = location.state || {};
  const fortune = useFortune(answers, birthDate);
  const birthYear = birthDate ? parseInt(birthDate.split('-')[0], 10) : null;
  const zodiac = birthYear ? getZodiac(birthYear) : null;
  const zodiacFortune = birthYear ? getZodiacFortune(birthYear) : null;

  if (!fortune) {
    navigate('/', { replace: true });
    return null;
  }

  const handleRetry = () => {
    navigate('/');
  };

  return (
    <div className="flex-1 flex flex-col items-center pt-8 pb-12 px-4">
      {zodiac && (
        <div className="text-center mt-4 mb-8 animate-fade-in">
          <span className="text-7xl">{zodiac.emoji}</span>
          <p className="text-text-main text-lg font-bold mt-2">
            {birthYear}년생 {zodiac.name}띠
          </p>
          <p className="text-text-sub text-sm mt-1">
            {zodiacFortune}
          </p>
        </div>
      )}

      {/* 운세 결과 */}
      <FortuneResult fortune={fortune} />

      {/* 공유 */}
      <div className="w-full max-w-md mb-6">
        <ShareButtons fortune={fortune} />
      </div>

      {/* 측근 사주 유도 카드 */}
      <div className="w-full max-w-md mb-6">
        <div
          className="rounded-2xl p-6 border border-pink text-center"
          style={{ background: 'linear-gradient(135deg, #2D1A50, #4A1A35)' }}
        >
          <p className="text-text-main font-bold text-lg mb-2">
            💜 주변 사람 운세도 봐줄게
          </p>
          <p className="text-text-sub text-sm mb-4">
            내가 가장 아끼는 사람의 오늘 운세
          </p>
          <div className="flex gap-3 justify-center mb-4">
            <span className="bg-bg-card/60 px-4 py-2 rounded-lg text-sm text-text-main border border-border-card">
              내가 가장 아끼는 사람
            </span>
          </div>
          <p className="text-text-sub text-xs mb-2">
            사주를 대신 봐주고, 결과를 선물처럼 보낼 수 있어요
          </p>
          <p className="text-text-sub text-xs">
            990원
          </p>
          <p className="text-text-sub/40 text-xs mt-2">
            곧 출시 예정
          </p>
        </div>
      </div>

      {/* 다시하기 */}
      <button
        onClick={handleRetry}
        className="text-purple-light text-sm hover:text-pink transition-colors mt-2"
      >
        다시 보기 →
      </button>

      {/* 면책 문구 */}
      <p className="text-text-sub/40 text-xs mt-6 max-w-md text-center px-4">
        본 운세 결과는 오락 목적으로 제공되며, 전문적인 상담을 대체하지 않습니다.
      </p>
    </div>
  );
}

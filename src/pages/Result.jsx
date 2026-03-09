import { useLocation, useNavigate } from 'react-router-dom';
import Character from '../components/Character/Character';
import FortuneResult from '../components/Result/FortuneResult';
import ShareButtons from '../components/ShareCard/ShareButtons';
import useFortune from '../hooks/useFortune';

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const { birthDate, answers } = location.state || {};
  const fortune = useFortune(answers, birthDate);

  if (!fortune) {
    navigate('/', { replace: true });
    return null;
  }

  const handleRetry = () => {
    navigate('/');
  };

  return (
    <div className="flex-1 flex flex-col items-center pt-8 pb-12 px-4">
      {/* 캐릭터 + 타이틀 */}
      <Character mode={fortune.characterMode} size="lg" />
      <p className="text-white text-lg font-bold mt-4 mb-8">어떻게 알았지?</p>

      {/* 운세 결과 */}
      <FortuneResult fortune={fortune} />

      {/* 공유 */}
      <div className="w-full max-w-md px-4 mb-6">
        <ShareButtons fortune={fortune} />
      </div>

      {/* 다시하기 */}
      <button
        onClick={handleRetry}
        className="text-purple-400 text-sm hover:text-purple-300 transition-colors mt-2"
      >
        친구 운세도 알아봐줄게 →
      </button>

      {/* 면책 문구 */}
      <p className="text-gray-700 text-xs mt-6 max-w-md text-center px-4">
        본 운세 결과는 오락 목적으로 제공되며, 전문적인 상담을 대체하지 않습니다.
        중요한 결정은 전문가와 상의해 주세요.
      </p>
    </div>
  );
}

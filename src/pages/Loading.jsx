import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Character from '../components/Character/Character';

const loadingTexts = [
  '지금 들여다보는 중...',
  '오늘의 기운을 읽고 있어',
  '거의 다 봤어...',
];

export default function Loading() {
  const navigate = useNavigate();
  const location = useLocation();
  const { birthDate, answers } = location.state || {};

  useEffect(() => {
    if (!birthDate || !answers) {
      navigate('/', { replace: true });
      return;
    }

    const timer = setTimeout(() => {
      navigate('/result', { state: { birthDate, answers }, replace: true });
    }, 2500);

    return () => clearTimeout(timer);
  }, [birthDate, answers, navigate]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="animate-pulse-slow">
        <Character mode="default" size="xl" />
      </div>

      <div className="mt-8 text-center">
        <p className="text-white text-lg font-medium animate-fade-in">
          {loadingTexts[0]}
        </p>
        <p className="text-gray-500 text-sm mt-2 animate-fade-in-delayed">
          {loadingTexts[1]}
        </p>
      </div>

      {/* 로딩 점 */}
      <div className="flex space-x-2 mt-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

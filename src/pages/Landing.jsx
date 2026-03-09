import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Character from '../components/Character/Character';

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 80 }, (_, i) => currentYear - 15 - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const days = Array.from({ length: 31 }, (_, i) => i + 1);

export default function Landing() {
  const navigate = useNavigate();
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const isValid = year && month && day;

  const handleStart = () => {
    if (!isValid) return;
    const birthDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    navigate('/survey', { state: { birthDate } });
  };

  const selectClass =
    'bg-gray-800 text-white border border-gray-700 rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:border-purple-500 transition-colors';

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
      {/* 로고 */}
      <div className="text-center mb-2">
        <h1 className="text-2xl font-bold text-white mb-1">🥠 오늘의 포춘쿠키</h1>
        <p className="text-gray-400 text-sm">AI가 꿰뚫어보는 오늘의 운세</p>
      </div>

      {/* 캐릭터 */}
      <div className="my-8">
        <Character mode="default" size="xl" />
      </div>

      {/* 생년월일 */}
      <div className="w-full max-w-sm space-y-4">
        <p className="text-gray-400 text-xs text-center">생년월일을 알려줘</p>
        <div className="grid grid-cols-3 gap-2">
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={selectClass}
            aria-label="년도 선택"
          >
            <option value="">년도</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}년</option>
            ))}
          </select>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className={selectClass}
            aria-label="월 선택"
          >
            <option value="">월</option>
            {months.map((m) => (
              <option key={m} value={m}>{m}월</option>
            ))}
          </select>
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className={selectClass}
            aria-label="일 선택"
          >
            <option value="">일</option>
            {days.map((d) => (
              <option key={d} value={d}>{d}일</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleStart}
          disabled={!isValid}
          className={`
            w-full py-4 rounded-2xl text-sm font-semibold transition-all
            ${
              isValid
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 active:scale-[0.98]'
                : 'bg-gray-800 text-gray-600 cursor-not-allowed'
            }
          `}
        >
          오늘 운세 보기
        </button>
      </div>

      <p className="text-gray-600 text-xs mt-6">
        가볍게 시작해서 '어떻게 알았지?'로 끝나는 경험
      </p>
      <p className="text-gray-700 text-xs mt-2 max-w-sm text-center">
        본 서비스는 오락 목적이며, 전문 상담을 대체하지 않습니다.
      </p>
    </div>
  );
}

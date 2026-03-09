import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    'bg-bg-card text-text-main border border-border-card rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:border-purple transition-colors';

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
      {/* 히어로 타이틀 */}
      <div className="text-center mb-2">
        <h1 className="text-[2.5rem] font-black leading-tight text-gradient-hero">
          오늘의 운세,
          <br />
          꿰뚫어봐줄게
        </h1>
      </div>

      {/* 생년월일 */}
      <div className="w-full max-w-sm space-y-4">
        <p className="text-text-sub text-xs text-center">생년월일을 알려줘</p>
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
            w-full py-4 rounded-full text-sm font-bold transition-all
            ${
              isValid
                ? 'bg-pink text-white hover:opacity-90 active:scale-[0.98] glow-pink'
                : 'bg-bg-card text-text-sub/40 cursor-not-allowed'
            }
          `}
        >
          오늘 운세 보기 →
        </button>
      </div>

      <p className="text-text-sub/50 text-xs mt-6">
        ✦ 행운신령
      </p>
    </div>
  );
}

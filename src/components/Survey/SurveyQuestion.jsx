import { useState } from 'react';

export default function SurveyQuestion({ question, questionNumber, total, onAnswer }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    if (selected !== null) return;
    setSelected(index);
    setTimeout(() => onAnswer(index), 300);
  };

  const progress = (questionNumber / total) * 100;

  return (
    <div className="w-full max-w-md mx-auto px-4 animate-slide-left">
      {/* 진행바 */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-text-sub">Q.{questionNumber} / {total}</span>
          <span className="text-xs text-text-sub/60">{question.theme}</span>
        </div>
        <div className="w-full bg-border rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple to-pink h-2 rounded-full transition-all duration-500"
            role="progressbar"
            aria-valuenow={questionNumber}
            aria-valuemin={1}
            aria-valuemax={total}
            aria-label={`${questionNumber}/${total} 문항 진행`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 질문 */}
      <h2 className="text-xl font-bold text-text-main mb-6 text-center leading-relaxed">
        {question.question}
      </h2>

      {/* 선택지 */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`
              w-full p-4 rounded-xl text-left transition-all duration-150
              ${
                selected === index
                  ? 'border border-pink text-text-main scale-[0.98] bg-bg-card'
                  : selected !== null
                  ? 'bg-bg-card/50 text-text-sub/40 border border-transparent'
                  : 'bg-bg-card text-text-main border border-border hover:border-purple active:scale-[0.98]'
              }
            `}
          >
            <span className="text-sm leading-relaxed">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

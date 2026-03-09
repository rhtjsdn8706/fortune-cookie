import { useState } from 'react';

export default function SurveyQuestion({ question, questionNumber, total, onAnswer }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    if (selected !== null) return;
    setSelected(index);
    setTimeout(() => onAnswer(index), 300);
  };

  const progress = ((questionNumber) / total) * 100;

  return (
    <div className="w-full max-w-md mx-auto px-4">
      {/* 진행바 */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">{questionNumber}/{total}</span>
          <span className="text-xs text-gray-500">{question.theme}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
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
      <h2 className="text-xl font-bold text-white mb-6 text-center leading-relaxed">
        {question.question}
      </h2>

      {/* 선택지 */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`
              w-full p-4 rounded-2xl text-left transition-all duration-200
              ${
                selected === index
                  ? 'bg-purple-500 text-white scale-[0.98]'
                  : selected !== null
                  ? 'bg-gray-800/50 text-gray-500'
                  : 'bg-gray-800 text-gray-200 hover:bg-gray-700 active:scale-[0.98]'
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

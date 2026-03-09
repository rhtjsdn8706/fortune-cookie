import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import questions from '../data/questions';
import SurveyQuestion from '../components/Survey/SurveyQuestion';
import Character from '../components/Character/Character';

export default function Survey() {
  const navigate = useNavigate();
  const location = useLocation();
  const birthDate = location.state?.birthDate;

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);

  if (!birthDate) {
    navigate('/', { replace: true });
    return null;
  }

  const handleAnswer = (index) => {
    const newAnswers = [...answers, index];
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      navigate('/loading', { state: { birthDate, answers: newAnswers } });
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  const characterMode = currentQ >= 4 ? 'piercing' : 'default';

  return (
    <div className="flex-1 flex flex-col items-center pt-6 pb-8 px-4">
      {/* 상단 바 */}
      <div className="w-full max-w-md flex justify-between items-center mb-6">
        <button
          onClick={handleClose}
          className="text-text-sub hover:text-text-main text-xl transition-colors"
          aria-label="닫기"
        >
          ✕
        </button>
        <Character mode={characterMode} size="sm" animate={false} />
      </div>

      {/* 질문 */}
      <div className="flex-1 flex items-center w-full">
        <SurveyQuestion
          key={currentQ}
          question={questions[currentQ]}
          questionNumber={currentQ + 1}
          total={questions.length}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}

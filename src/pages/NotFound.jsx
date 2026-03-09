import { Link } from 'react-router-dom';
import Character from '../components/Character/Character';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
      <Character mode="shocked" size="lg" />
      <h1 className="text-white text-xl font-bold mt-6 mb-2">404</h1>
      <p className="text-gray-400 text-sm mb-8 text-center">
        이 페이지는 운세로도 찾을 수 없어요
      </p>
      <Link
        to="/"
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}

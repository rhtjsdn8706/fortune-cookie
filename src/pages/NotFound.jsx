import { Link } from 'react-router-dom';
import Character from '../components/Character/Character';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
      <Character mode="shocked" size="lg" />
      <h1 className="text-text-main text-xl font-bold mt-6 mb-2">길을 잃었다</h1>
      <p className="text-text-sub text-sm mb-6">이 페이지는 존재하지 않는다.</p>
      <Link
        to="/"
        className="bg-pink text-white px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
      >
        운세 보러 가기 →
      </Link>
    </div>
  );
}

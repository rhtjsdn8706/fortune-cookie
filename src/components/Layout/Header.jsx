import { Link, useLocation } from 'react-router-dom';

const contentPages = ['/about', '/guide', '/privacy', '/terms', '/contact'];

export default function Header() {
  const location = useLocation();
  const isContentPage = contentPages.includes(location.pathname);

  return (
    <header className="w-full px-4 py-3 flex items-center justify-between max-w-2xl mx-auto">
      <Link to="/" className="text-white font-bold text-lg hover:opacity-80 transition-opacity">
        🥠 오늘의 포춘쿠키
      </Link>
      {isContentPage && (
        <Link
          to="/"
          className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          운세 보기
        </Link>
      )}
    </header>
  );
}

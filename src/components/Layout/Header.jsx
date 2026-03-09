import { Link, useLocation } from 'react-router-dom';

const contentPages = ['/about', '/guide', '/privacy', '/terms', '/contact'];

export default function Header() {
  const location = useLocation();
  const isContentPage = contentPages.includes(location.pathname);

  return (
    <header className="sticky top-0 z-50 h-14 flex items-center justify-between px-4 bg-bg-base/90 backdrop-blur-sm border-b border-border">
      <Link to="/" className="text-gradient-hero font-bold text-lg hover:opacity-80 transition-opacity">
        행운신령
      </Link>
      {isContentPage && (
        <Link
          to="/"
          className="text-sm text-purple-light hover:text-pink transition-colors"
        >
          운세 보기
        </Link>
      )}
    </header>
  );
}

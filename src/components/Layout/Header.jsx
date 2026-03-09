import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const contentPages = ['/about', '/guide', '/privacy', '/terms', '/contact'];

export default function Header() {
  const location = useLocation();
  const isContentPage = contentPages.includes(location.pathname);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 h-14 flex items-center justify-between px-4 bg-bg-base/90 backdrop-blur-sm border-b border-border">
      <Link to="/" className="text-gradient-hero font-bold text-lg hover:opacity-80 transition-opacity">
        행운신령
      </Link>
      <div className="flex items-center gap-3">
        {isContentPage && (
          <Link
            to="/"
            className="text-sm text-purple-light hover:text-pink transition-colors"
          >
            운세 보기
          </Link>
        )}
        <button
          onClick={toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-bg-card border border-border-card hover:border-purple transition-colors text-lg"
          aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}

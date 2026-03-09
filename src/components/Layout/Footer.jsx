import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full px-4 py-8 mt-auto border-t border-border">
      <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-text-sub mb-4">
        <Link to="/about" className="hover:text-text-main transition-colors">소개</Link>
        <Link to="/guide" className="hover:text-text-main transition-colors">운세 가이드</Link>
        <Link to="/privacy" className="hover:text-text-main transition-colors">개인정보처리방침</Link>
        <Link to="/terms" className="hover:text-text-main transition-colors">이용약관</Link>
        <Link to="/contact" className="hover:text-text-main transition-colors">문의</Link>
      </nav>
      <p className="text-center text-xs text-text-sub/60 mb-2">
        본 서비스는 오락 목적이며, 실제 운세나 전문 상담이 아닙니다.
      </p>
      <p className="text-center text-xs text-text-sub/60">
        &copy; 2026 행운신령
      </p>
    </footer>
  );
}

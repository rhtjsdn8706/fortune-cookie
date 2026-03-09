import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full px-4 py-8 mt-auto border-t border-gray-800">
      <div className="max-w-2xl mx-auto">
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-400 mb-4">
          <Link to="/about" className="hover:text-gray-200 transition-colors">소개</Link>
          <Link to="/guide" className="hover:text-gray-200 transition-colors">운세 가이드</Link>
          <Link to="/privacy" className="hover:text-gray-200 transition-colors">개인정보처리방침</Link>
          <Link to="/terms" className="hover:text-gray-200 transition-colors">이용약관</Link>
          <Link to="/contact" className="hover:text-gray-200 transition-colors">문의</Link>
        </nav>
        <p className="text-center text-xs text-gray-600 mb-2">
          본 서비스는 오락 목적이며, 실제 운세나 전문 상담이 아닙니다.
        </p>
        <p className="text-center text-xs text-gray-600">
          &copy; 2026 오늘의 포춘쿠키
        </p>
      </div>
    </footer>
  );
}

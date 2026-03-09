import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const hideFooterRoutes = ['/survey', '/loading'];

export default function Layout() {
  const location = useLocation();
  const hideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div className="min-h-dvh bg-bg-base flex justify-center">
      <div className="w-full max-w-md min-h-dvh flex flex-col border-x border-border relative">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-purple focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="main-content" className="flex-1 flex flex-col">
          <Outlet />
        </main>
        {!hideFooter && <Footer />}
      </div>
    </div>
  );
}

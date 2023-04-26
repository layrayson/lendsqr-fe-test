import { ReactNode } from 'react';

import Default from './Default';
import Auth from './Auth';
import { useRouter } from 'next/router';
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <div>
      {(() => {
        if (router.pathname.includes('auth/')) {
          return <Auth>{children}</Auth>;
        } else {
          return <Default>{children}</Default>;
        }
      })()}
    </div>
  );
};

export default Layout;

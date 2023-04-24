import { ReactNode } from 'react';
import styles from '../../styles/layouts/Default.module.scss';
import AsideMenu from '../toolbars/AsideMenu';
import NavBar from '../toolbars/NavBar';
interface DefaultLayoutProps {
  children: ReactNode;
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className={styles.layoutContainer}>
      <NavBar />

      <AsideMenu />
      <div className={styles.layoutPage}>{children}</div>
    </div>
  );
};

export default DefaultLayout;

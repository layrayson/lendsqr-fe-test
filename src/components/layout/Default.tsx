import { ReactNode } from 'react';
import styles from '../../styles/layouts/Default.module.scss';
import AsideMenu from '../toolbars/AsideMenu';
import NavBar from '../toolbars/NavBar';
interface DefaultProps {
  children: ReactNode;
}
const Default = ({ children }: DefaultProps) => {
  return (
    <div className={styles.layoutContainer}>
      <NavBar />

      <AsideMenu />
      <div className={styles.layoutPage}>
        <div className={styles.layoutPageInner}>{children}</div>
      </div>
    </div>
  );
};

export default Default;

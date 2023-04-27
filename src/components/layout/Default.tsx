import { ReactNode, useEffect } from 'react';
import styles from '../../styles/layouts/Default.module.scss';
import AsideMenu from '../toolbars/AsideMenu';
import NavBar from '../toolbars/NavBar';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useRouter } from 'next/router';
interface DefaultProps {
  children: ReactNode;
}
const Default = ({ children }: DefaultProps) => {
  const { isLoggedIn } = useTypedSelector(state => state.authReducer)
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/login");
    }
  }, [
    isLoggedIn
  ])
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

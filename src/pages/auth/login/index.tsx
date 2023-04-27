import Image from 'next/image';
import styles from '../../../styles/pages/LoginPage.module.scss';
import custom from '../../../styles/shared/Custom.module.scss';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import AuthAction from '@/redux/auth/auth.action';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  return (
    <>
      <Head>
        <title>Login - Lendsqr </title>
      </Head>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.logo}>
            {' '}
            <Image
              src={'/assets/lendsqr_logo.svg'}
              width={173.76}
              height={36}
              alt="lendsqr logo"
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={'/assets/signin_hero.svg'}
              width={600}
              height={337.57}
              alt="hero"
            />
          </div>
        </div>
        <div className={styles.formSection}>
          <div className={styles.loginForm}>
            <div className={styles.formHeader}>
              <div>
                <h3>Welcome!</h3>
              </div>
              <div>
                <p>Enter details to login</p>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(AuthAction.login({ email: form.email }));
                router.push('/users');
              }}
            >
              <div className={styles.formContent}>
                <div className={styles.emailInput}>
                  <input
                    placeholder="Email"
                    required
                    type="email"
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                    }}
                  />
                </div>
                <div className={styles.passwordInput}>
                  <input
                    placeholder="Password"
                    required
                    type="password"
                    onChange={(e) => {
                      setForm({ ...form, password: e.target.value });
                    }}
                  />
                  <button className={custom.plainBtn}>
                    <i className="bx bxs-hide"></i>
                  </button>
                </div>
                <div className={styles.forgotPassword}>
                  <a href="#"> FORGOT PASSWORD?</a>
                </div>
                <div className={styles.loginButton}>
                  <button type="submit">LOGIN</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  );
};

export default LoginPage;

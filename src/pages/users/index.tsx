import custom from '../../styles/shared/Custom.module.scss';
import styles from '../../styles/pages/UsersPage.module.scss';
import Image from 'next/image';

const UsersPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={custom.pageHeader}>
        <h5>Users</h5>
      </div>
      <div className={styles.statsFlex}>
        <div className={styles.statsFlexItem}>
          <div className={styles.statAvatar + ' ' + custom.bgLightPink}>
            <Image
              src={'/assets/icons/users_stat.svg'}
              alt="users"
              height={22}
              width={22}
            />
          </div>
          <div className={styles.statTitle}>USERS</div>
          <div className={styles.statValue}>2,453</div>
        </div>{' '}
        <div className={styles.statsFlexItem}>
          <div className={styles.statAvatar + ' ' + custom.bgLightBlue}>
            <Image
              src={'/assets/icons/active_users_stats.svg'}
              alt="users"
              height={22}
              width={22}
            />
          </div>
          <div className={styles.statTitle}>ACTIVE USERS</div>
          <div className={styles.statValue}>2,453</div>
        </div>{' '}
        <div className={styles.statsFlexItem}>
          <div className={styles.statAvatar + ' ' + custom.bgLightOrange}>
            <Image
              src={'/assets/icons/users_with_loans_stat.svg'}
              alt="users"
              height={22}
              width={22}
            />
          </div>
          <div className={styles.statTitle}>USERS WITH LOANS</div>
          <div className={styles.statValue}>12,453</div>
        </div>{' '}
        <div className={styles.statsFlexItem}>
          <div className={styles.statAvatar + ' ' + custom.bgLightRed}>
            <Image
              src={'/assets/icons/users_with_savings_stat.svg'}
              alt="users"
              height={22}
              width={22}
            />
          </div>
          <div className={styles.statTitle}>USERS WITH SAVINGS</div>
          <div className={styles.statValue}>102,453</div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
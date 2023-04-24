import Image from 'next/image';
import styles from '../../styles/toolbars/NavBar.module.scss';
const NavBar = () => {
  return (
    <div className={styles.navMenuContainer}>
      <div className={styles.navWrapper}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <Image
              src={'/assets/lendsqr_logo.svg'}
              width={144.8}
              height={30}
              alt="lendsqr logo"
            />
          </div>
        </div>
        <div className={styles.navMenuRight}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search for anything" />
            <div>
              <button>
                <Image
                  src={'/assets/search_icon.svg'}
                  alt=""
                  width={13.97}
                  height={14}
                />
              </button>
            </div>
          </div>
          <div className={styles.navMenuActions}>
            <div className={styles.navAction + ' ' + styles.docsLink}>
              <a href="">Docs</a>
            </div>
            <div className={styles.navAction}>
              <Image
                src={'/assets/bell_icon.svg'}
                width={19.67}
                height={22.74}
                alt="bell"
              />
            </div>
            <div className={styles.navAction + ' ' + styles.userProfile}>
              <div className={styles.userAvatar}>
                <Image
                  src={'/assets/user_avatar.svg'}
                  width={48}
                  height={48}
                  alt="user"
                />
              </div>
              <div className={styles.userName}>
                <div>Adedeji</div>
                <Image
                  src={'/assets/chevron_down.svg'}
                  width={7.34}
                  height={4.15}
                  alt="user"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

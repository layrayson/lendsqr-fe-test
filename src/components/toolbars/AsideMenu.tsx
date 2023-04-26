import Image from 'next/image';
import styles from '../../styles/toolbars/SideBar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AsideMenu = () => {
  const router = useRouter();

  return (
    <div className={styles.aside}>
      <div className={styles.switchOrganisationMenu}>
        <div className={styles.menuIcon}>
          <Image
            src={'/assets/icons/briefcase.svg'}
            alt="brief"
            height={16}
            width={16}
          />
        </div>
        <div className={styles.switchOrganisationMenuTitle}>
          Switch Organization
        </div>
        <div className={styles.switchOrganisationMenuIcon}>
          <Image
            src={'/assets/icons/chevron_outline.svg'}
            alt="chevron"
            height={14.21}
            width={9.57}
          />
        </div>
      </div>

      <Link
        href={'/'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/home.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Dashboard</div>
        </div>
      </Link>
      <div className={styles.menuLabel}>CUSTOMERS</div>
      <Link
        href={'/users'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname.includes('/users') ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/users.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Users</div>
        </div>
      </Link>
      <Link
        href={'/guarantors'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/guarantors' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/guarantors.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Guarantors</div>
        </div>
      </Link>
      <Link
        href={'/loans'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/loans' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/loans.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Loans</div>
        </div>
      </Link>
      <Link
        href={'/decision-models'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/decision-models' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/decision_models.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Decision Models</div>
        </div>
      </Link>
      <Link
        href={'/savings'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/savings' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/savings.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Savings</div>
        </div>
      </Link>
      <Link
        href={'/loan-requests'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/loan-requests' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/loan_requests.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Loan Requests</div>
        </div>
      </Link>
      <Link
        href={'/whitelist'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/whitelist' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/whitelist.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Whitelist</div>
        </div>
      </Link>
      <Link
        href={'/karma'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/karma' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/karma.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Karma</div>
        </div>
      </Link>

      <div className={styles.menuLabel}>BUSINESSES</div>
      <Link
        href={'/organization'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/organization' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/briefcase.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Organisation</div>
        </div>
      </Link>
      <Link
        href={'/loan-products'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/loan-products' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/loan_requests.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Loan Products</div>
        </div>
      </Link>
      <Link
        href={'/savings-products'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/savings-products' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/savings_products.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Savings Products</div>
        </div>
      </Link>
      <Link
        href={'/fees-and-charges'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/fees-and-charges' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/fees_and_charges.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Fees and Charges</div>
        </div>
      </Link>
      <Link
        href={'/transactions'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/transactions' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/transactions.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Transactions</div>
        </div>
      </Link>
      <Link
        href={'/services'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/services' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/services.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Services</div>
        </div>
      </Link>
      <Link
        href={'/service-account'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/service-account' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/service_account.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Service Account</div>
        </div>
      </Link>
      <Link
        href={'/settlements'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/settlements' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/settlements.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Settlements</div>
        </div>
      </Link>
      <Link
        href={'/reports'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/reports' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/reports.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Reports</div>
        </div>
      </Link>

      <div className={styles.menuLabel}>SETTINGS</div>
      <Link
        href={'/preferences'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/preferences' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/preferences.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Preferences</div>
        </div>
      </Link>
      <Link
        href={'/fees-and-pricing'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/fees-and-pricing' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/fees_and_pricing.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Fees and Pricing</div>
        </div>
      </Link>
      <Link
        href={'/audit-logs'}
        className={
          styles.menuItem +
          ' ' +
          (router.pathname == '/audit-logs' ? styles.menuItemActive : '')
        }
      >
        <div className={styles.menuItemOverlay}></div>
        <div className={styles.menuItemInner}>
          <div className={styles.menuIcon}>
            <Image
              src={'/assets/icons/audit_logs.svg'}
              alt="home"
              height={16}
              width={16}
            />
          </div>
          <div className={styles.menuTitle}>Audit Logs</div>
        </div>
      </Link>
    </div>
  );
};

export default AsideMenu;

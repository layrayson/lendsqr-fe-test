import Image from 'next/image';
import styles from '../../styles/toolbars/SideBar.module.scss';
const AsideMenu = () => {
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

      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuLabel}>CUSTOMERS</div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>

      <div className={styles.menuLabel}>BUSINESSES</div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>

      <div className={styles.menuLabel}>SETTINGS</div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>
      <div className={styles.menuItem}>
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
      </div>
    </div>
  );
};

export default AsideMenu;

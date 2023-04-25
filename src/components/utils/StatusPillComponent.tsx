import styles from '../../styles/components/utils/StatusPillComponent.module.scss';
interface StatusPillComponentProps {
  status: string;
}

const StatusPillComponent = ({ status }: StatusPillComponentProps) => {
  switch (status) {
    case 'inactive':
      return (
        <div className={styles.pillContainer + ' ' + styles.pillGray}>
          <div>{status}</div>
        </div>
      );
    case 'pending':
      return (
        <div className={styles.pillContainer + ' ' + styles.pillYellow}>
          <div>{status}</div>
        </div>
      );
    case 'blacklisted':
      return (
        <div className={styles.pillContainer + ' ' + styles.pillRed}>
          <div>{status}</div>
        </div>
      );
    case 'active':
      return (
        <div className={styles.pillContainer + ' ' + styles.pillGreen}>
          <div>{status}</div>
        </div>
      );

    default:
      return <div></div>;
  }
};

export default StatusPillComponent;

import custom from '../../../styles/shared/Custom.module.scss';
import styles from '../../../styles/pages/UserDetailsPage.module.scss';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import UserAction from '@/redux/user/user.action';
import { useRouter } from 'next/router';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Mode } from '@/types/mode.type';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { getCurrencyString, getFullName } from '@/types/user.type';
import Link from 'next/link';
import Head from 'next/head';

const UserDetailsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { userId } = router.query;
  const { mode, user, errorMessage } = useTypedSelector(state => state.userReducer)
  const findUserById = ({ id }: { id: string }) => {
    dispatch(UserAction.findUserById({ id }));
  }
  const loading = (mode == Mode.loading);

  useEffect(() => {
    if (!userId) return;
    findUserById({ id: userId as string });
  }
    , [userId])
  return (
    <>
      <Head>
        <title>Users | {user?.userName ? getFullName(user?.userName) : ''} </title>
      </Head>

      <div className={styles.navigation}>
        <i className="bx bx-arrow-back"></i> <Link href="/users" className={styles.navigationLink}> Back to Users   </Link>
      </div>

      <SkeletonTheme highlightColor="#9999">

        <div className={styles.pageWrapper}>
          <div className={styles.headerFlex}>
            <div className={styles.pageHeader}>
              <h5>User Details</h5>
            </div>
            <div className={styles.headerActions}>
              <div>
                <button className={styles.actionButtonRed}>BLACKLIST USER</button>
              </div>
              <div>
                <button className={styles.actionButtonSuccess}>
                  ACTIVATE USER
                </button>
              </div>
            </div>
          </div>
          <div className={styles.userProfileContainer}>
            <div className={styles.userProfileFlex}>
              <div className={styles.userProfileAvatar}>
                {
                  loading ? <Image
                    src={'/assets/icons/user_profile_avatar.svg'}
                    width={27.92}
                    height={29.3}
                    alt="avatar"
                  /> : <Image
                    src={user?.profile.avatar ?? ''}
                    width={100}
                    height={100}
                    alt="avatar"
                  />
                }

              </div>
              <div className={styles.userNameDiv}>
                <div className={styles.userName}>  {loading ? (
                  <Skeleton className={styles.skeletonWidth} />
                ) : (
                  user?.userName ? getFullName(user?.userName) : null
                )}</div>
                <div className={styles.userRef}> {loading ? (
                  <Skeleton className={styles.skeletonWidth} />
                ) : (
                  'LSQFf587g90'
                )}</div>
              </div>
              <div className={styles.usersTier}>
                <div className={styles.usersTierTitle}>Users Tier</div>
                <div className={styles.usersTierFlex}>
                  <div className={styles.usersStarTier}>
                    <i className="bx bx-star"></i>
                  </div>
                  <div className={styles.usersStarTier}>
                    <i className="bx bx-star"></i>
                  </div>
                  <div className={styles.usersStarTier}>
                    <i className="bx bx-star"></i>
                  </div>
                </div>
              </div>
              <div className={styles.bankDetailsDiv}>
                <div className={styles.balanceNumber}>
                  {loading ? (
                    <Skeleton className={styles.skeletonWidth} />
                  ) : (
                    user?.accountBalance ? getCurrencyString(user?.accountBalance) : null
                  )}
                </div>
                <div className={styles.bankDets}>{loading ? (
                  <Skeleton className={styles.skeletonWidth} />
                ) : (
                  user?.accountNumber
                )}</div>
              </div>
            </div>
          </div>
          <div className={styles.tabViewContainer}>
            <div className={styles.generalDetail}>
              <div className={styles.detailHeader}>
                <h5>Personal Information</h5>
              </div>
              <div className={styles.detailGrid}>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>FULL NAME</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.profile.firstName + ' ' + user?.profile.lastName
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>PHONE NUMBER</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.profile.phoneNumber
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>EMAIL ADDRESS</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.email
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>BVN</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.profile.bvn
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>GENDER</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.profile.gender
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>MARITAL STATUS</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      'Single'
                    )}
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>CHILDREN</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      'None'
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>TYPE OF RESIDENCE</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      "Parent's apartment"
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.generalDetail}>
              <div className={styles.detailHeader}>
                <h5>Education and Employment</h5>
              </div>
              <div className={styles.detailGrid}>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>level of education </div>
                  <div className={styles.detailContent}>    {loading ? (
                    <Skeleton className={styles.skeletonWidth} />
                  ) : (
                    user?.education.level
                  )}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>employment status</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.education.employmentStatus
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>sector of employment</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.education.sector
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>Duration of employment</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.education.duration
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>office email</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.education.officeEmail
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>Monthly income</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.education.monthlyIncome
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>loan repayment</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.education.loanRepayment
                    )}
                  </div>
                </div>

              </div>
            </div>
            <div className={styles.generalDetail}>
              <div className={styles.detailHeader}>
                <h5>Socials</h5>
              </div>
              <div className={styles.detailGrid}>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>twitter</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.socials.twitter
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>facebook</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.socials.facebook
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>instagram</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.socials.instagram
                    )}
                  </div>
                </div>

              </div>
            </div>
            <div className={styles.generalDetail}>
              <div className={styles.detailHeader}>
                <h5>Guarantor</h5>
              </div>
              <div className={styles.detailGrid}>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>FULL NAME</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.guarantor.firstName + ' ' + user?.guarantor.lastName
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>phone number</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.guarantor.phoneNumber
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>email address</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.email
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>relationship</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      'Sister'
                    )}
                  </div>
                </div>

              </div>
            </div>
            <div className={styles.generalDetail}>
              <div className={styles.detailHeader}>
                <h5>Guarantor</h5>
              </div>
              <div className={styles.detailGrid}>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>FULL NAME</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.guarantor.firstName + ' ' + user?.guarantor.lastName
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>phone number</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.guarantor.phoneNumber
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>email address</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      user?.email
                    )}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailTitle}>relationship</div>
                  <div className={styles.detailContent}>
                    {loading ? (
                      <Skeleton className={styles.skeletonWidth} />
                    ) : (
                      'Sister'
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
};

export default UserDetailsPage;

import custom from '../../styles/shared/Custom.module.scss';
import styles from '../../styles/pages/UsersPage.module.scss';
import Image from 'next/image';
import StatusPillComponent from '@/components/utils/StatusPillComponent';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import UsersAction from '@/redux/users/users.action';
import { PageMeta } from '@/types/pagination.type';
import ReactPaginate from 'react-paginate';

const UsersPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { users, pagination } = useTypedSelector(state => state.usersReducer);
    const mountedRef = useRef(false);

    const statusList = ['blacklisted', 'pending', 'inactive', 'active']
    const findAllUsers = async ({ pagination }: { pagination: PageMeta }) => {
        await dispatch(await UsersAction.findAllUsers({ pagination }))


    }
    useEffect(() => {
        if (mountedRef.current) return;
        findAllUsers({ pagination });
        mountedRef.current = true
    }, [])
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
            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                ORGANIZATION{' '}
                                <button className={custom.plainBtn}>
                                    <Image
                                        src={'/assets/icons/filter_icon.svg'}
                                        height={10.67}
                                        width={16}
                                        alt="filter"
                                    />
                                </button>
                            </th>
                            <th>
                                USERNAME{' '}
                                <button className={custom.plainBtn}>
                                    <Image
                                        src={'/assets/icons/filter_icon.svg'}
                                        height={10.67}
                                        width={16}
                                        alt="filter"
                                    />
                                </button>
                            </th>
                            <th>
                                EMAIL{' '}
                                <button className={custom.plainBtn}>
                                    <Image
                                        src={'/assets/icons/filter_icon.svg'}
                                        height={10.67}
                                        width={16}
                                        alt="filter"
                                    />
                                </button>
                            </th>
                            <th>
                                PHONE NUMBER{' '}
                                <button className={custom.plainBtn}>
                                    <Image
                                        src={'/assets/icons/filter_icon.svg'}
                                        height={10.67}
                                        width={16}
                                        alt="filter"
                                    />
                                </button>
                            </th>
                            <th>
                                DATE JOINED{' '}
                                <button className={custom.plainBtn}>
                                    <Image
                                        src={'/assets/icons/filter_icon.svg'}
                                        height={10.67}
                                        width={16}
                                        alt="filter"
                                    />
                                </button>
                            </th>
                            <th>
                                STATUS{' '}
                                <button className={custom.plainBtn}>
                                    <Image
                                        src={'/assets/icons/filter_icon.svg'}
                                        height={10.67}
                                        width={16}
                                        alt="filter"
                                    />
                                </button>
                            </th>
                            <th><div ></div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(el => (<tr key={`table-row-${el.id}`}>
                                <td>{el.orgName}</td>
                                <td>{el.userName.split('.')[0] + ' ' + el.userName.split('.')[1]}</td>
                                <td>{el.email}</td>
                                <td>{el.phoneNumber}</td>
                                <td>{el.createdAt}</td>
                                <td><StatusPillComponent status={statusList[Math.floor(Math.random() * 4)]} /></td>
                                <td>
                                    <button className={custom.plainBtn}><i className='bx bx-dots-vertical-rounded'></i></button>
                                </td>
                            </tr>)
                            )
                        }


                    </tbody>
                </table>
            </div>
            <div className={styles.paginationWrapper}>
                <div>

                </div>

                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={() => {
                        findAllUsers({ pagination })
                    }}
                    pageRangeDisplayed={5}
                    pageCount={500 / (pagination.limit)}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    breakClassName={styles.paginationBreak}
                    breakLinkClassName={styles.paginationBreakLink}
                    containerClassName={styles.containerClassName}
                    pageClassName={styles.pageClassName}
                    pageLinkClassName={styles.pageLinkClassName}
                    activeClassName={styles.activeClassName}

                />
            </div>
        </div>
    );
};

export default UsersPage;

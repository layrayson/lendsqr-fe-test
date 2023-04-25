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
import { useRouter } from 'next/router';
import { UsersActionType, UsersActions } from '@/redux/users/users.type';
import { Mode } from '@/types/mode.type';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const UsersPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const { users, pagination, mode } = useTypedSelector(
        (state) => state.usersReducer,
    );
    const mountedRef = useRef(false);

    const statusList = ['blacklisted', 'pending', 'inactive', 'active'];
    const tableLoading = () => {
        return [1, 2, 3, 4].map((el) => (
            <tr key={`table-row-${el}`}>
                <td>
                    <Skeleton />
                </td>
                <td>
                    <Skeleton />
                </td>{' '}
                <td>
                    <Skeleton />
                </td>{' '}
                <td>
                    <Skeleton />
                </td>{' '}
                <td>
                    <Skeleton />
                </td>
                <td>
                    <Skeleton />
                </td>
            </tr>
        ));
    }
    const findAllUsers = async ({ pagination }: { pagination: PageMeta }) => {
        await dispatch(await UsersAction.findAllUsers({ pagination }));
    };
    useEffect(() => {
        if (mountedRef.current) return;
        findAllUsers({ pagination });
        mountedRef.current = true;
    }, []);
    return (
        <div className={styles.pageWrapper}>
            <SkeletonTheme highlightColor="#9999">
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
                                <th>
                                    <div></div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {(() => {
                                switch (mode) {
                                    case Mode.init:
                                        return tableLoading();
                                    case Mode.loading:
                                        return tableLoading();
                                    case Mode.loaded:
                                        return users.map((el) => (
                                            <tr key={`table-row-${el.id}`}>
                                                <td>{el.orgName}</td>
                                                <td>
                                                    {el.userName.split('.')[0] +
                                                        ' ' +
                                                        el.userName.split('.')[1]}
                                                </td>
                                                <td>{el.email}</td>
                                                <td>{el.phoneNumber}</td>
                                                <td>{el.createdAt}</td>
                                                <td>
                                                    <StatusPillComponent
                                                        status={statusList[Math.floor(Math.random() * 4)]}
                                                    />
                                                </td>
                                                <td>
                                                    <button className={custom.plainBtn}>
                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ));
                                }
                            })()}
                        </tbody>
                    </table>
                </div>
                <div className={styles.paginationWrapper}>
                    <div className={styles.pageLimitFlex}>
                        <div className={styles.pageLimitText}>Showing</div>
                        <div className={styles.pageLimitSelect}>
                            <select
                                name="page-limit-select"
                                id="select-page-limit"
                                defaultValue={100}
                                onChange={(e) => {
                                    dispatch<UsersActions>({
                                        type: UsersActionType.SET_PAGE_LIMIT,
                                        payload: Number(e.target.value),
                                    });
                                }}
                            >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </div>
                        <div className={styles.pageLimitText}>out of 100</div>
                    </div>

                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={<i className="bx bx-chevron-right"></i>}
                        onPageChange={({ selected }) => {
                            console.log(selected);
                            router.push({
                                search: `page=${selected + 1}&limit=${pagination.limit}`,
                            });
                            findAllUsers({
                                pagination: { page: selected + 1, limit: pagination.limit },
                            });
                        }}
                        pageRangeDisplayed={5}
                        pageCount={500 / pagination.limit}
                        previousLabel={<i className="bx bx-chevron-left"></i>}
                        renderOnZeroPageCount={null}
                        breakClassName={'paginationBreak'}
                        breakLinkClassName={'paginationBreakLink'}
                        containerClassName={'containerClassName'}
                        pageClassName={'pageClassName'}
                        pageLinkClassName={'pageLinkClassName'}
                        activeClassName={'activeClassName'}
                        activeLinkClassName={'activeLinkClassName'}
                        previousClassName={'previousClassName'}
                        previousLinkClassName={'previousLinkClassName'}
                        nextClassName={'nextClassName'}
                        nextLinkClassName={'nextLinkClassName'}
                    />
                </div>
            </SkeletonTheme>
        </div>
    );
};

export default UsersPage;

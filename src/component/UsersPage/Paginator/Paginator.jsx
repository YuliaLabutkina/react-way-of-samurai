import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPageSize, getTotalUsersCount, getCurrentPage } from '../../../redux/users-selectors';
import { requestUser } from '../../../redux/users-reducer';
import s from './Paginator.module.css';

const Paginator = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const [portionNumber, setPortionNumber] = useState(1)


    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    const portionSize = 10;
    const portionCount = Math.ceil(pagesCount / portionSize);
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionNumber = portionNumber * portionSize;

    const onPageChanged = (pageNumber) => {
        dispatch(requestUser(pageNumber, pageSize));
    };

    return (
        <div className={s.pagination}>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber).map(page => <span key={page} onClick={() => onPageChanged(page)} className={currentPage === page ? s.selectedPage : null}>{page}</span>)}
            {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Netx</button>}
        </div>
    );
};

export default Paginator; 
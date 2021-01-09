import User from './User';
import s from './UsersPage.module.css';

const UsersPage = ({ onPageChanged, totalUsersCount, pageSize, currentPage, users, follow, unfollow }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    return (
        <>
            <div className={s.pagination}>
                {pages.map(page => <span key={page} onClick={() => onPageChanged(page)} className={currentPage === page ? s.selectedPage : null}>{page}</span>)}
            </div>
            <ul className={s.usersList} >
                {users.length !== 0 && users.map(user => <User key={user.id} user={user} follow={follow} unfollow={unfollow} />)}
            </ul>
        </>
    );
};

export default UsersPage;
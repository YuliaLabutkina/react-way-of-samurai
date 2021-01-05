import s from './Post.module.css';

const Post = ({message, likesCount}) => {
    return (
        <li className={s.item}>
            <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIo8rq6p_VE-r3ifLF3hFx0Ykg-FJpfOOAw&usqp=CAU" alt=""/>
            {message}
            <div>
                <span>Like</span> {likesCount}
            </div>
        </li>
    )
};

export default Post;
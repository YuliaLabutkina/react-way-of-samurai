import defaultImg from '../../../img/user-male.png';

const User = ({ user, follow, unfollow }) => {
    const { id, followed, photos, name, status } = user;
    return (
        <li>
            <div>
                <img src={photos.small !== null ? photos.small : defaultImg} alt='photo'/>
                {followed
                    ? <button onClick={() => unfollow(id)}>'UPFOLLOW'</button> 
                    : <button onClick={() => follow(id)}>'FOLLOW'</button>
                }
            </div>
            <div>
                <div>{name}</div>
                <div>{status}</div>
            </div>
            {/* <div>
                <div>{country}</div>
                <div>{city}</div>
            </div> */}
        </li>
    )
};

export default User;
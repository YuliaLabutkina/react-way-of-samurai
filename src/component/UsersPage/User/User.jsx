

const User = ({ user, follow, unfollow }) => {
    const { id, followed, photoUrl, fullName, status, location: { city, country } } = user;
    return (
        <li>
            <div>
                <img src={photoUrl} alt='photo'/>
                {followed
                    ? <button onClick={() => unfollow(id)}>'UPFOLLOW'</button> 
                    : <button onClick={() => follow(id)}>'FOLLOW'</button>
                }
            </div>
            <div>
                <div>{fullName}</div>
                <div>{status}</div>
            </div>
            <div>
                <div>{country}</div>
                <div>{city}</div>
            </div>
        </li>
    )
};

export default User;
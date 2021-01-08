import { useEffect } from 'react';
import User from './User';

const UsersPage = ({ users, follow, unfollow, setUsers }) => {
    console.log('hi')

    useEffect(() => {
        if (users.length === 0) {
        setUsers([
        { "id": 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', followed: false, fullName: 'Artem', status: 'I am a boss', location: { city: 'Vinnitsa', country: 'Ukraine' } },
        { "id": 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', followed: true, fullName: 'Illya', status: 'I am a boss too', location: { city: 'Vinnitsa', country: 'Ukraine' } },
        { "id": 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', followed: false, fullName: 'Alex', status: 'I am a boss too', location: {city: 'Vinnitsa', country: 'Ukraine'}},
    ])
    }
    }, [])

    return (
        <ul>
            {users.length !== 0 && users.map(user => <User key={user.id} user={user} follow={follow} unfollow={unfollow} />)}
        </ul>
    )
};

export default UsersPage;
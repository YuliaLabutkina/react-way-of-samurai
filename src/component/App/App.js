import { BrowserRouter, Route } from 'react-router-dom';

import HeaderContainer from '../Header/HeaderContainer';
import NavBar from '../NavBar';
import ProfileContainer from '../Profile/ProfileContainer';
import UsersContainer from '../UsersPage/UsersContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import Music from '../Music';
import Settings from '../Settings';
import FriendsPage from '../FriendsPage';

import s from './App.module.css';

const App = ({ state}) => {
    const { friends } = state.sideBar;

    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
              <HeaderContainer />
              <NavBar friends={friends}/>
              <div className={s.wrapperContent}>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
                <Route path='/friends' render={() => <FriendsPage />} />
              </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
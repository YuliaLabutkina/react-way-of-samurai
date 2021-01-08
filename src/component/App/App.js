import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../Header';
import NavBar from '../NavBar';
import Profile from '../Profile';
import UsersContainer from '../UsersPage/UsersContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import News from '../News';
import Music from '../Music';
import Settings from '../Settings';
import FriendsPage from '../FriendsPage';

import s from './App.module.css';

const App = ({ state, dispatch}) => {
    const { posts, newPostText } = state.profilePage;
    const { friends } = state.sideBar;

    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
              <Header />
              <NavBar friends={friends}/>
              <div className={s.wrapperContent}>
                <Route path='/profile' render={() => <Profile posts={posts} newPostText={newPostText} dispatch={dispatch} />}/>
                <Route path='/dialogs' render={() => <DialogsContainer dispatch={dispatch} messagesPage={state.messagesPage} />} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
                <Route path='/friends' render={() => <FriendsPage />} />
              </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
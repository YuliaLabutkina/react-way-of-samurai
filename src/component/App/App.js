import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../Header';
import NavBar from '../NavBar';
import Profile from '../Profile';
import Dialogs from '../Dialogs';
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
            <Route path='/dialogs' render={() => <Dialogs dispatch={dispatch} messagesPage={state.messagesPage} />} />
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
import React, { Component } from "react";
import { compose } from "redux";
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import HeaderContainer from '../Header/HeaderContainer';
import NavBar from '../NavBar';
import ProfileContainer from '../Profile/ProfileContainer';
import UsersContainer from '../UsersPage/UsersContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import LoginPage from '../LoginPage';
import Music from '../Music';
import Settings from '../Settings';
import FriendsPage from '../FriendsPage';
import { initialize } from '../../redux/app-reducer';

import PreLoader from '../common/PreLoader';
import s from './App.module.css';

class App extends Component {
  componentDidMount() {
    this.props.initialize();
  };

  render() {
    if (!this.props.initialized) {
      return <PreLoader/>
    };

    return (
      <div className={s.appWrapper}>
              <HeaderContainer />
              <NavBar />
              <div className={s.wrapperContent}>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/login' render={() => <LoginPage />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
                <Route path='/friends' render={() => <FriendsPage />} />
              </div>
            </div>
    )
  }
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initialize })
  )(App);
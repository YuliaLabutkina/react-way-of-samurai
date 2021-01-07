import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';
import './index.css';

import store from './redux/redux-store';
import App from './component/App';


const renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

export default renderEntireTree;

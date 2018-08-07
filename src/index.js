import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { firebase } from '_firebase';
import UserContext from 'context';

firebase.auth().onAuthStateChanged((user) => {
  ReactDOM.render(<UserContext.Provider value={user}><App/></UserContext.Provider>, document.getElementById('root'));
});
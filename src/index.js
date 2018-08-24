import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/_fonts.css';
import './styles/_global.css';
import './styles/font-awesome/css/all.css';

// Pages (packages)
import TrumpTweets from './pages/TrumpTweets';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/trump-tweets" component={TrumpTweets} />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TrumpTweets from './pages/TrumpTweets';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/trump-tweets" component={TrumpTweets} />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

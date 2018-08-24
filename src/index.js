import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from 'react-router-dom';
import './styles/_fonts.css';
import './styles/_global.css';
import './styles/font-awesome/css/all.css';
import App from './App';

// Pages (packages)
import TrumpTweets from './pages/TrumpTweets';
import CorporateIpsum from './pages/CorporateIpsum';

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Route path="/" component={App} />
      <Route path="/trump-tweets" component={TrumpTweets} />
      <Route path="/corporate-ipsum" component={CorporateIpsum} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();

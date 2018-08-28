import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from 'react-router-dom';
import './styles/_fonts.css';
import './styles/_global.css';
import './styles/font-awesome/css/all.css';
import App from './App';

// Pages (packages)
import Nose from './pages/Nose';
import TrumpTweets from './pages/TrumpTweets';
import CorporateIpsum from './pages/CorporateIpsum';
import RapperNameGenerator from './pages/RapperNameGenerator';

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Route path="/" component={App} />
      <Route path="/nose" component={Nose} />
      <Route path="/trump-tweets" component={TrumpTweets} />
      <Route path="/corporate-ipsum" component={CorporateIpsum} />
      <Route path="/rapper-name-generator" component={RapperNameGenerator} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();

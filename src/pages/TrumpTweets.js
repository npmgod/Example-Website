import React, { Component } from 'react';
import '../styles/pages/TrumpTweets.css';
import TrumpTweet from 'trump-tweets';
import $ from 'jquery';
import Links from '../components/Links';

class TrumpTweets extends Component {
  render() {
    return (
      <div className="TrumpTweets page-wrapper">
        <div className="header">Trump-Tweets:</div>
        <div className="sub-text">
          Generate some of our president's tweets for your enjoyment!
        </div>

        <div className="button" onClick={this.generate.bind(this)}>
          Generate
        </div>

        <div className="results" />

        <Links
          githubLink="https://github.com/npmgod/Trump-Tweets"
          npmLink="https://www.npmjs.com/package/trump-tweets"
        />
      </div>
    );
  }

  // Generate a tweet
  generate() {
    var tweet = TrumpTweet();
    $('.results').html(tweet);
  }
}

export default TrumpTweets;

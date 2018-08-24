import React, { Component } from 'react';
import '../styles/pages/TrumpTweets.css';
import TrumpTweet from 'trump-tweets';
import $ from 'jquery';

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

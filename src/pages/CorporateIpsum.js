import React, { Component } from 'react';
import '../styles/pages/CorporateIpsum.css';
import generateIpsum from 'corporate-ipsum';
import $ from 'jquery';
import Links from '../components/Links';

class CorporateIpsum extends Component {
  render() {
    return (
      <div className="CorporateIpsum page-wrapper">
        <div className="header">Corporate-Ipsum:</div>
        <div className="sub-text">
          Tired of boring old placeholder text? Like Lorem Ipsum? Spice up your
          filler with Coprorate-Ipsum, and maybe impress your client or
          management with your professional wisdom!
        </div>

        <div className="line-count-container">
          <span>Amount of phrases: </span>
          <input type="number" className="line-count" placeholder="3" />
        </div>
        <div className="error" />
        <div className="button" onClick={this.generate.bind(this)}>
          Generate
        </div>

        <div className="results" />

        <Links
          githubLink="https://github.com/npmgod/Corporate-Ipsum"
          npmLink="https://www.npmjs.com/package/corporate-ipsum"
        />
      </div>
    );
  }

  // Generate a tweet
  generate() {
    var phraseCount = $('.line-count').val() || 3;

    if (phraseCount > 30) {
      this.createError('This page has a limit of 30 phrases.');
    } else {
      this.createError(''); // Clear the error
      $('.results').html(generateIpsum(phraseCount));
    }
  }

  // Shoot an error to the user
  createError(text) {
    $('.error').html(text);
  }
}

export default CorporateIpsum;

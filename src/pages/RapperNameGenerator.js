import React, { Component } from 'react';
import '../styles/pages/RapperNameGenerator.css';
import GenerateName from 'rapper-name-generator';
import $ from 'jquery';
import Links from '../components/Links';

class RapperNameGenerator extends Component {
  render() {
    return (
      <div className="RapperNameGenerator page-wrapper">
        <div className="header">Rapper-Name-Generator:</div>
        <div className="sub-text">
          Need more clout coins? Generate a new name and get hella followers.
        </div>

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
    $('.results').html(GenerateName());
  }
}

export default RapperNameGenerator;

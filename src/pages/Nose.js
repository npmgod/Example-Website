import React, { Component } from 'react';
import '../styles/pages/RapperNameGenerator.css';
import nose from 'nose';
import $ from 'jquery';
import Links from '../components/Links';

class Nose extends Component {
  componentDidMount() {
    nose();
  }
  render() {
    return (
      <div className="Nose page-wrapper">
        <div className="header">Nose:</div>
        <div className="sub-text">
          Ever felt like your website needed more noses? Look no further! This
          could be any webpage. Just imagine your site smelling as great as
          this!
        </div>

        <Links
          githubLink="https://github.com/npmgod/Nose"
          npmLink="https://www.npmjs.com/package/rapper-name-generator"
        />
      </div>
    );
  }
}

export default Nose;

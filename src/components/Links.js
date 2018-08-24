import React, { Component } from 'react';
import '../styles/components/Links.css';

class Links extends Component {
  render() {
    return (
      <div className="Links">
        {/* Github Repository */}
        <a href={this.props.githubLink} target="_blank">
          <i className="fab fa-github" />
          Github Repository
        </a>

        {/* NPM Page */}
        <a href={this.props.npmLink} target="_blank">
          <i className="fab fa-npm" />
          Node Package
        </a>
      </div>
    );
  }
}

export default Links;

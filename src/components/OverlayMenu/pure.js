import React, { Component } from 'react';
import './index.scss';

class NewComponent extends Component {
  render() {
    const { sections, isActive } = this.props;

    return (
      <div className={`overlay-menu ${isActive ? '-active' : ''}`}>
        <ul className="sections">
          {
            sections.map((section, i) => {
              return (
                <li className="section" key={i}>{section}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default NewComponent;

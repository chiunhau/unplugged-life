import React, { Component } from 'react';
import './index.scss';

class NewComponent extends Component {
  render() {
    const { sections } = this.props;
    return (
      <div className="dots-menu">
        <ul className="sections">
          {
            sections.map((section, i) => {
              return (
                <li className="section" key={i}><span className="text">{section}</span><span className="dot"></span></li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default NewComponent;

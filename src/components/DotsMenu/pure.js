import React, { Component } from 'react';
import './index.scss';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

class NewComponent extends Component {
  render() {
    const { sections } = this.props;
    return (
      <div className="dots-menu">
        <ul className="sections">
          {
            sections.map((section, i) => {
              return (
                <li className="section" key={i}><ScrollLink to={`section-${i + 2}`} spy={true} smooth={true} duration={500}className="text">{section}</ScrollLink><span className="dot"></span></li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default NewComponent;

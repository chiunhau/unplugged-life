import React, { Component } from 'react';
import './index.scss';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;


class NewComponent extends Component {
  handleClick = () => {
    this.props.onClick();
  }
  render() {
    const { sections, isActive } = this.props;

    return (
      <div className={`overlay-menu ${isActive ? '-active' : ''}`}>
        <ul className="sections">
          {
            sections.map((section, i) => {
              return (
                <li className="section" key={i}><ScrollLink to={`section-${i + 2}`} spy={true} smooth={true} duration={500}className="text" onClick={this.handleClick}>{section}</ScrollLink></li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default NewComponent;

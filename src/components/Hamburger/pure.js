import React, { Component } from 'react';
import './index.scss';

class NewComponent extends Component {
  handleToggle = () =>{
    this.props.onToggle();
  }

  render() {
    const { isActive } = this.props;
    return (
      <div className={`hamburger-icon ${isActive ? '-active' : ''}`} onClick={this.handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    );
  }
}

export default NewComponent;

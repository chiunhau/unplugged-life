import React, { Component } from 'react';
import './index.scss';

class NewComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  handleToggle = () => {
    this.setState((prev) => {
      return {
        isOpen: !prev.isOpen
      }
    })
  }

  render() {
    const { titleImg, children } = this.props;
    return (
      <div className="toggle-qa">
        <img src={titleImg} alt="" className="image-title" onClick={this.handleToggle}/>
        <p className="paragraph" style={{display: `${this.state.isOpen ? 'block' : 'none'}`}}>
          { children }
        </p>
      </div>
    );
  }
}

export default NewComponent;

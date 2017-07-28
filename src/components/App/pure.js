import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.scss';
import Hamburger from '../Hamburger';
import OverlayMenu from '../OverlayMenu';
import DotsMenu from '../DotsMenu';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Hamburger/>
          <OverlayMenu/>
          <section className="section-1">
            <DotsMenu/>
            <img className="key-visual" src="/img/key-visual.png" alt="不插電生活"/>
            <h2 className="slogan">「你的夢想怎麼樣了呢？」</h2>
            <p className="subslogan">不插電生活，<br/>為自己，<br/>勇敢再勇敢，<br/>一起勇敢追夢吧！</p>

            <h2 className="slogan -desktop">「<br/>你<br/>的<br/>夢<br/>想<br/>怎<br/>麼<br/>樣<br/>了<br/>呢<br/>？<br/>」</h2>
            <p className="subslogan -desktop">不<br/>插<br/>電<br/>生<br/>活<br/>，<br/>為<br/>自<br/>己<br/>，<br/>勇<br/>敢<br/>再<br/>勇<br/>敢<br/>，<br/>一<br/>起<br/>勇<br/>敢<br/>追<br/>夢<br/>吧<br/>！</p>
          </section>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

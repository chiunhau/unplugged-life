import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
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

          <section className="section-2">
            <div className="container">
              <img className="icon-section" src="/img/icon-section-2.png" alt="計畫緣起"/>
              <img className="img-title" src="/img/section-2-title.png" alt="計畫緣起" />
              <p className="paragraph">
                你，想過什麼樣的生活？<br/>你要怎麼樣才能追求夢想，而不是被生活牽著鼻子走？<br/>生活在電子通訊發達時代的我們，總害怕面對空白與尷尬，<br/>一沒電就陷入恐慌，更無法想像完全沒有電力的生活。
              </p>
              <div className="youtube">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fF36QXtx-W0" frameBorder="0" allowFullScreen title="youtube"></iframe>
              </div>
              <p className="quote">「如果這個夏日，失去三天電，你會獲得什麼呢？」</p>
              <p className="paragraph">讓我們重新感知對於生活的感受，為自己，勇敢再勇敢，開啟你的勇敢模式！ 大夢城市挑戰賽，72小時無電體驗，讓你在沒有中尋找你所擁有的。</p>
            </div>
          </section>

          <section className="section-3">
            <div className="container">
              <img className="icon-section" src="/img/icon-section-3.png" alt="計畫緣起"/>
              <img className="img-title" src="/img/section-3-title.png" alt="計畫緣起" />
              <p className="quote">放下習以為常的生活，產生前所未有的勇氣</p>
              <p className="paragraph">沒有電的你會是一無所有嗎？無電生活的參賽者就像生活在一個小部落裡，每天面對生活與挑戰。邀請你來完成大家在有電時可以順利完成的事物，但這一次，你沒有垂手可得的資源，你，可以順利達成嗎？實踐夢想只差踏出去的勇氣，這一次，開啟你的勇敢模式，來完成顛覆自己原先的想像的事情！這絕對會是一場挫折不斷，卻驚喜連連的挑戰，最終完賽時，你一定會不可置信地發現：「勇敢再勇敢，沒什麼不敢！」
              </p>
              <img className="unplugged-goal" src="/img/unplugged-goal.png" alt=""/>
              <div className="goal-box">
                <p className="title">挑戰目標一：放下習以為常的生活：過過前人的生活，體驗無電生活</p>
                <p className="description paragraph">
                  無光晚餐，靠自己烹食，這樣的晚餐吃起來味道會更美味嗎？<br/>進浴室開燈洗著熱水澡是再平常不過的事，而無電的狀態下，你要如何進行?<br/>沒有鬧鐘叫醒你，叫醒你的會是限時挑戰？<br/>當手機仔滑手機的日子，在無電下，你的新娛樂又會是甚麼呢？
                </p>
                <p className="title">挑戰目標二：開啟你的勇敢模式：與陌生人一起，合作完成限時挑戰</p>
                <p className="paragraph">總說現實與夢想是難以兼顧的，那就來玩個小型實驗吧！由主辦方隨機分組，四人一隊，在兼顧無電生活的狀態下，一起合作完成限時神秘大挑戰!</p>
                <p className="title">挑戰目標三：傳播你的冒險故事：成為一個有故事的人</p>
                <p className="paragraph">害怕驀然回首發現自己沒有甚麼人生故事好講嗎？故事的起點，就從參賽開始！結束限時大挑戰後，和你的隊友們找尋陌生人，交換你們的冒險故事吧！</p>
              </div>
            </div>

          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

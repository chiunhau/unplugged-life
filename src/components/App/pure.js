import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './index.scss';
import Hamburger from '../Hamburger';
import OverlayMenu from '../OverlayMenu';
import DotsMenu from '../DotsMenu';
import ToggleQA from '../ToggleQA';

const qa = [
  '可以，參賽者須為18歲至24歲青年，並無學生身分限制，歡迎每位想開啟勇敢模式的你來報名喔!',
  '不可，以個人為單位報名，報名成功後會由主辦單位協助隨機組成四人團隊，報名費以1300元/人收費，認識的朋友可能會被打散到不同組別喔。',
  '1300元費用除了兩頓早餐、三頓午餐、兩頓晚餐外，包含保險以及兩天住宿，完全成本價，72小時不插電生活不會讓你只住帳棚度過單純的三天生活，更需要你走出帳篷外，完成挑戰任務，還有兩位重量級超強引導員加持帶領你經驗反思，完全物超所值！',
  '報名７２小時不插電生活你會有６０位夥伴與你一起踏出舒適圈，開啟你的勇敢模式！我們不只是單純的度過無電的三日生活，更要你與你的夥伴們一起完成限時挑戰、故事傳播，這條路上，你絕不孤單！還有兩位重量級超強引導員與工作人員帶領你一起展開全新體驗！',
  '可以，但在進場時會統一交由主辦方保管，直到活動結束才會歸還喔！',
  '只要能全程參與活動，皆可算完賽，可獲得完賽紀念品。但完成目標之成果、時間以及質量則會作為最後頒獎之參考依據。',
  '我們將依今年的活動成果決定明年是否舉辦更特別的挑戰項目！如果心動就趕快把握機會即刻報名囉!',
  '這次的大夢城市沒有下一階段，72小時不插電生活就是這次的主題活動囉！',
  '可以直接私訊我們粉絲專頁或是寄信到官方信箱哦，我們都會很快地回覆大家！ 信箱:dreamercity@citywanderer.org'
]

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
            <div className="challange">
              <img className="content-image" src="/img/challange-m.png" alt=""/>
              <Link to="#" className="button"><img src="/img/btn-brave.png" alt=""/></Link>
            </div>
          </section>
          <section className="section-4">
            <div className="container">
              <img className="icon-section" src="/img/icon-section-4.png" alt="常見問題"/>
              <img className="img-title" src="/img/section-4-title.png" alt="常見問題" />

              {
                qa.map((q, i) => {
                  return (
                    <ToggleQA titleImg={`/img/Q${i+1}-01.png`}>
                      {q}
                    </ToggleQA>
                  )
                })
              }
            </div>
          </section>
          <section className="section-5">
            <div className="container">
              <img className="icon-section" src="/img/icon-section-5.png" alt="常見問題"/>
              <img className="img-title" src="/img/section-5-title.png" alt="常見問題" />
              <div className="organization">
                <img className="logo" src="/img/logo-city-wanderer.png" alt=""/>
                <img className="title" src="/img/title-city-wanderer.png" alt=""/>
                <p>自2013年成立，相信Inspire people, cultivate the world，協會共舉辦超過49場流浪挑戰賽，以任務體驗的方式鼓勵青年藉由探索自身天賦以達到貢獻社會的目標。</p>
              </div>
              <div className="organization">
                <img className="logo" src="/img/logo-gamania.png" alt=""/>
                <img className="title" src="/img/title-gamania.png" alt=""/>
                <p>自2009年開始，秉持著「青年應該用力作大夢、用力做自己」的信念，接連創辦夏日學園、大夢計劃和DRM造夢論壇，陪伴超過400位青年體驗冒險教育。</p>
              </div>
              <img src="/img/section-5-slogan.png" alt="" className="slogan"/>
            </div>
          </section>
          <section className="section-6">
            <div className="container">
              <img className="icon-section" src="/img/icon-section-6.png" alt="常見問題"/>
              <img className="img-title" src="/img/section-6-title.png" alt="常見問題" />
              <img src="/img/section-6-slogan.png" alt="" className="slogan"/>
            </div>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { useState } from 'react';
import Modal from './Modal'
import Update from './Update';
import Header from './Header';
import Sidenav from './Sidenav';
function App() {

  const [update, setUpdate] = useState(false);
  const [rank, setRank] = useState(12890);
  const [percentile, setPercentile] = useState("37%");
  const [currentScore, setCurrentScore] = useState("07/15");

  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <Sidenav />

        <main className='content'>

          <div className="first">

            <div className='skill-test'>Skill test</div>

            <div className='subject'>
              <div className='subject-wrapper'>
                <img src="https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png" alt="" />
                <div>
                  <div className="subject-title"> Hypertext Markup Language</div>
                  <div className="subject-description">  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</div>
                </div>
              </div>
              <button className='button' onClick={(e) => { e.preventDefault(); e.stopPropagation(); setUpdate(true); }}>Update</button>
              {update ? <Modal onClose={(e) => { e.stopPropagation(); e.preventDefault(); setUpdate(false); }}>
                <Update setUpdate={setUpdate} setCurrentScore={setCurrentScore} setPercentile={setPercentile} setRank={setRank} rank={rank} percentile={percentile} currentScore={currentScore}></Update></Modal> : ""}
            </div>


            <div className='quick'>

              <div className="quick-statistics">Quick Statistics</div>

              <div className='scores'>

                <div className="statistic">
                  <span className="symbol">🏆</span>
                  <span>
                    <div className="statistic-value">{rank}</div>
                    <div className="statistic-title">YOUR RANK</div>
                  </span>
                </div>


                <div className="statistic">
                  <span className="symbol">
                  📋
                  </span>
                  <span>
                    <div className="statistic-value">{percentile}</div>
                    <div className="statistic-title">PERCENTILE</div>
                  </span>
                </div>


                <div className="statistic">
                  <span className="symbol">✅</span>
                  <span>
                    <div className="statistic-value">{currentScore}</div>
                    <div className="statistic-title">CORRECT ANSWERS</div>
                  </span>
                </div>


              </div>
            </div>



            <div className="comparison">
              Compaurson
            </div>


          </div>

          <div className="second">

            <div className="syllabus">syllabus</div>
            <div className="question">question</div>

          </div>


        </main>
      </div>



    </div>
  );
}

export default App;
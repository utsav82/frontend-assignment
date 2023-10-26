import React, { useState } from 'react';
import Modal from './Modal'
import Update from './Update';
function App() {
  const [update, setUpdate] = useState(false);
  const [rank, setRank] = useState(100);
  const [percentile, setPercentile] = useState(90);
  const [currentScore, setCurrentScore] = useState(80);
  return (
    <div className="App">

      <div className='header'></div>
      <div className="body">
        <div className="sidenav"></div>
        
        <main>

          <div className="first">

            <div className='update'>
              <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setUpdate(true); }}>Update</button>
              {update ? <Modal onClose={(e) => { e.stopPropagation(); e.preventDefault(); setUpdate(false); }}><Update setUpdate={setUpdate} setCurrentScore={setCurrentScore} setPercentile={setPercentile} setRank={setRank} rank={rank} percentile={percentile} currentScore={currentScore}></Update></Modal> : ""}
            </div>

            <div className='quick' style={{ backgroundColor: "blue" }}>
              <h>{rank}</h>
              <h>{percentile}</h>
              <h>{currentScore}</h>
            </div>

            <div className="comparison"></div></div>

          <div className="second">

            <div className="syllabus"></div>
            <div className="question"></div>

          </div>


        </main>
      </div>



    </div>
  );
}

export default App;
import { useState } from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";
import Skill from "./Skill";
import Quick from "./Quick";
import Syllabus from "./Syllabus";
import QuestionAnalysis from "./QuestionAnalysis";
import ComparisonChart from "./ComparisonChart";

function App() {

  const [rank, setRank] = useState(12890);
  const [percentile, setPercentile] = useState(37);
  const [currentScore, setCurrentScore] = useState(7);

  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <Sidenav />

        <main className="content">
          <div className="first">
            <div className="skill-test">Skill test</div>

            <Skill
              setCurrentScore={setCurrentScore}
              setPercentile={setPercentile}
              setRank={setRank}
              rank={rank}
              percentile={percentile}
              currentScore={currentScore} />

            <Quick
              rank={rank}
              percentile={percentile}
              currentScore={currentScore} />

            <ComparisonChart percentile={percentile} />

          </div>


          <div className="second">
            <Syllabus />
            <QuestionAnalysis currentScore={currentScore} />
          </div>


        </main>
      </div>
    </div>
  );
}

export default App;

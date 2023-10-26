import React from 'react'
import ScorePieChart from "./ScorePieChart";
const QuestionAnalysis = ({currentScore}) => {
  return (
    <div className="question">
    <div className="question-analysis">
      <div className="question-analysis-title">Question Analysis</div>
      <div className="question-analysis-score">
        {currentScore < 10 ? "0" : ""}
        {currentScore}/15
      </div>
    </div>
    <div className="question-analysis-description">
      You scored {currentScore} question correct out of 15. However it
      still needs some improvements
    </div>

    <ScorePieChart currentScore={currentScore} />
  </div>
  )
}

export default QuestionAnalysis

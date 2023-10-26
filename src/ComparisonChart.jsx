import React from 'react'
import Chart from "./Chart";
const ComparisonChart = ({percentile}) => {
  return (
    <div className="comparison" style={{ position: "relative" }}>
    <div className="comparsion-graph">Comparison Graph</div>
    <div className="graph_description">
      You scored {percentile}% percentile which is lower than the average
      percentile 72% of all the engineers who took this assessment
    </div>
    <span
      className="symbol"
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        margin: "1rem",
      }}
    >
      📈
    </span>
    <Chart percentile={percentile} />
  </div>
  )
}

export default ComparisonChart

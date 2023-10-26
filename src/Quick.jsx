import React from 'react'

const Quick = ({ currentScore, percentile, rank }) => {
    return (
        <div className="quick">
            <div className="quick-statistics">Quick Statistics</div>

            <div className="scores">
                <div className="statistic">
                    <span className="symbol">🏆</span>
                    <span>
                        <div className="statistic-value">{rank}</div>
                        <div className="statistic-title">YOUR RANK</div>
                    </span>
                </div>

                <div className="statistic">
                    <span className="symbol">📋</span>
                    <span>
                        <div className="statistic-value">{percentile}%</div>
                        <div className="statistic-title">PERCENTILE</div>
                    </span>
                </div>

                <div className="statistic">
                    <span className="symbol">✅</span>
                    <span>
                        <div className="statistic-value">
                            {currentScore < 10 ? "0" : ""}
                            {currentScore}/15
                        </div>
                        <div className="statistic-title">CORRECT ANSWERS</div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Quick

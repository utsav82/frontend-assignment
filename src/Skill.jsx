import React, { useState } from 'react'
import Update from "./Update";
import Modal from "./Modal";
const Skill = ({
    setRank,
    setPercentile,
    setCurrentScore,
    rank,
    percentile,
    currentScore
}) => {
    const [update, setUpdate] = useState(false);
    return (
        <div className="subject">
            <div className="subject-wrapper">
                <img
                    src="https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png"
                    alt=""
                />
                <div>
                    <div className="subject-title">
                        {" "}
                        Hypertext Markup Language
                    </div>
                    <div className="subject-description">
                        {" "}
                        Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                    </div>
                </div>
            </div>
            <button
                className="button"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setUpdate(true);
                }}
            >
                Update
            </button>
            {update ? (
                <Modal
                    onClose={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setUpdate(false);
                    }}
                >
                    <Update
                        setUpdate={setUpdate}
                        setCurrentScore={setCurrentScore}
                        setPercentile={setPercentile}
                        setRank={setRank}
                        rank={rank}
                        percentile={percentile}
                        currentScore={currentScore}
                    ></Update>
                </Modal>
            ) : (
                ""
            )}
        </div>
    )
}

export default Skill

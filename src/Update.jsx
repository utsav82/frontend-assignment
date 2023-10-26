import React, { useState } from "react";

export default function Update({
  setRank,
  setPercentile,
  setCurrentScore,
  rank,
  percentile,
  currentScore,
  setUpdate,
}) {
  const [formData, setFormData] = useState({ rank, percentile, currentScore });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSave = () => {
    setRank(formData.rank);
    setPercentile(formData.percentile);
    setCurrentScore(formData.currentScore);
    setUpdate(false);
  };
  return (
    <div className="modal">
      <div className="modal-header">
        <h2>Update Scores</h2>
      
      </div>
      <form>
        <div className="modal-entry">
          <label htmlFor="rank">Rank:</label>
          <input
            type="text"
            id="rank"
            name="rank"
            value={formData.rank}
            onChange={handleInputChange}
          />
        </div>
        <div className="modal-entry">
          <label htmlFor="percentile">Percentile:</label>
          <input
            type="text"
            id="percentile"
            name="percentile"
            value={formData.percentile}
            onChange={handleInputChange}
          />
        </div>
        <div className="modal-entry">
          <label htmlFor="currentScore">Current Score (out of 15):</label>
          <input
            type="text"
            id="currentScore"
            name="currentScore"
            value={formData.currentScore}
            onChange={handleInputChange}
          />
        </div>
        <div className="modal-buttons">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setUpdate(false);
            }}
          >
            Cancel
          </button>
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

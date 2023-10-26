import  { useState } from "react";
import './Update.css';
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
    if(!formData.rank || formData.rank<=0)
    {
      if(formData.rank)
      alert("Enter valid rank");
      else alert("Enter your Rank");
    }
    else if( !formData.percentile || formData.percentile<0 || formData.percentile>100)
    {
      if(formData.percentile)
      alert("Enter percentile between 0 and 100");
      else alert("Enter your percentile");
    }
    else if(!formData.currentScore || formData.currentScore<0 || formData.currentScore>15)
    {
      if(formData.currentScore)
      alert("Enter valid current score (0-15)");
      else alert("Enter your score");
    }
    else{
    setRank(formData.rank);
    setPercentile(formData.percentile);
    setCurrentScore(formData.currentScore);
    setUpdate(false);
    }
  };
  return (
    <div className="modal">
      <form onSubmit={handleSave}>
        <div className="modal-header">
          <div className="Heading">Update Scores</div>
          <div className="html-logo"><img alt="#" height="60rem" src="../html.png"></img></div>
        </div>
        <hr />
        <div className="form-entry">
          <ol className="custom-counter">
            <li>
              <label htmlFor="rank">Update your <b>rank</b></label>
              <input type="number" id="rank" name="rank" value={formData.rank} onChange={handleInputChange}
              />
            </li>
            <li >
              <label htmlFor="percentile">Update your <b>percentile</b></label>
              <input type="number" id="percentile" name="percentile" value={formData.percentile} onChange={handleInputChange}
              />
            </li>
            <li>
              <label htmlFor="currentScore">Update your <b>current score (out of 15) </b></label>
              <input type="number" id="currentScore" name="currentScore" value={formData.currentScore} onChange={handleInputChange}
              />
            </li>
          </ol>
        </div>
        <hr/>
        <div className="footer">
          <div className="modal-buttons">
            <button className="cancel"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setUpdate(false);
              }}
            >
              Cancel
            </button>
            <button className="submit" type="button" onClick={handleSave}>
              Save -&gt;
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

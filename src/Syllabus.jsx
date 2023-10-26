import React from 'react'

const Syllabus = () => {
  return (
    <div className="syllabus">
    <div className="syllabus-wise-analysis">
      Syllabus wise Analysis
    </div>

    <div className="topics">
      <div className="topic">
        <div>HTML Tools, Forms, History</div>
        <div className="info">
          <div className="loader-container-blue">
            <span className="loader-blue"></span>
          </div>
          <span className="color light-blue">80%</span>
        </div>
      </div>

      <div className="topic">
        <div>Tags & References in HTML</div>
        <div className="info">
          <div className="loader-container-orange">
            <span className="loader-orange"></span>
          </div>
          <span className="color orange">60%</span>
        </div>
      </div>

      <div className="topic">
        <div>Tables & CSS Basics</div>
        <div className="info">
          <div className="loader-container-pink">
            <span className="loader-pink"></span>
          </div>
          <span className="color pink">24%</span>
        </div>
      </div>

      <div className="topic">
        <div>Tables & CSS Basics</div>
        <div className="info">
          <div className="loader-container-green">
            <span className="loader-green"></span>
          </div>
          <span className="color green">96%</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Syllabus

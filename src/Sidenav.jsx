import React from 'react'
import './index.css'
const Sidenav = () => {
    return (
        <div className="sidebar">
            <div className='nav-item'>
                <img className='icon' src='dashboard.svg'></img>
                <span className='nav-item-text'>Dashboard</span>
            </div>
            <div className='nav-item' style={{ backgroundColor: "#f7f8fa"}}>
                <img className='icon' src='award.svg'></img>
                <span className='nav-item-text' style={{ color: "#445EE2"}}>Skills test</span>
            </div>
            <div className='nav-item'>
                <img className='icon' src='intern.svg' >
                </img><span className='nav-item-text'> Internships</span>
            </div>
        </div>
    )
}

export default Sidenav

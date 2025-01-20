import React from 'react'
import './Skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesing from '../../assets/website-design.png'
import AppDesing from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">I'm skilled and passionate frontend developer with experience in creating visually appealing and user-friendly websites with strong understanding of design. I am proficient in HTML, CSS,Javascript, ReactJS, NextJS, React-native and TaiwindCSS.</span>
      <div className="skillBars">
       {/*<div className="skillBar">
        <img className="skillBarImg" alt="skill" src={UIDesign} />
        <div className="skillBarText">
         <h2>UI/UX DESIGN</h2>
         <p></p>
        </div>
       </div> */}

       <div className="skillBar">
        <img className="skillBarImg" alt="skill" src={WebDesing} />
        <div className="skillBarText">
         <h2>FRONTEND DEVELOPER</h2>
         <p></p>
        </div>
       </div>

       <div className="skillBar">
        <img className="skillBarImg" alt="skill" src={AppDesing} />
        <div className="skillBarText">
         <h2>REACT NATIVE DEVELOPER</h2>
         <p></p>
        </div>
       </div>

      </div>

    </section>
  )
}

export default Skills

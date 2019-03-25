import React from 'react'
import PropTypes from 'prop-types'

import rr from '../images/rr.png'
import freelance from '../images/freelance.jpg'
import resume from '../images/resume.png'
import bay from '../images/bay.jpg'
import jobs from '../images/jobs.jpg'
import lotr from '../images/lotr.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={bay} alt="" /></span>
          <p>I am a Web Developer with a passion for startups and learning new technologies. While working for a tech startup, I was drawn to the creativity that goes into writing code as well as the power of a few lines of text. I began to study Web Development in my free time.</p>
          <p>In July 2018, I finished a 6 month Web Development Immersive program through Galvanize, a coding school in Denver. Throughout the course I spent over 1000 hours writing code and learned numerous technologies such as React, Node.js, Express, Knex, Postgres, and others.</p>
          <p>I am currently balancing my time between founding a company in Boulder and delivering on a few freelance contracts. I am looking for a full-time position in Web Development (Front or Back-End), Software Engineering, or QA in Denver.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <h3>RoadRewards App</h3>
          <span className="image main"><img src={rr} alt="" /></span>
          <p>For my final project in the Galvanize Web Development program, I was granted the opportunity to both satisfy the requirements of my project and become Co-Founder of a startup in Boulder. I built the RoadRewards App in two weeks as a prototype to help sell the company to investors and strategic partners. The RoadRewards App is designed to incentivize drivers to focus on the road by rewarding them with discounts and other rewards at partner businesses. React Native, Firebase Auth, Heroku.</p>
          <h3>Freelance Projects</h3>
          <span className="image main"><img src={freelance} alt="" /></span>
          <p>As a freelance Web Developer, I mostly only took on small contracts, as I did not want to bite off more than I could chew so early on.  I built a website for a holistic wellness coach (React and Bootstrap)  <a href="http://www.tracybroddwellness.com">Link Here.</a> and another for an equine therapist (Vue and Materialize).  <a href="https://shady-pines.firebaseapp.com/">Link Here.</a> The websites are not particularly complicated, but they are attractive and fulfill the needs of my clients.</p>
          <h3>Group Project</h3>
          <span className="image main"><img src={jobs} alt="" /></span>
          <p>This full-stack Job Tracker application was built by me and 3 fellow students on a team using Agile Methodologies. The app is for job seekers who want to track their progress, contacts, and important dates.  Through the process I learned the value of working as an Agile team and using tools such as Trello, kanban boards, and assigning a new Scrum master each day to better understand the team dynamic from different perspectives. <a href="https://mojobtake4.firebaseapp.com/landing">Link Here.</a></p>
          <h3>Lord of the Rings Quote Generator</h3>
          <span className="image main"><img src={lotr} alt="" /></span>
          <p>This was the first full-stack application I built in React and is creatively one of my favorites to date.  I built a Lorem Ipsum generator with a database populated entirely with LOTR book and movie quotes.  I built it in React in only a week and used Semantic UI as my styling library.  <a href="https://lordoftheripsum.firebaseapp.com/">Link Here.</a></p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Resume</h2>
          <span className="image main"><img src={resume} alt="" /></span>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="http://www.github.com/treycottingham" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="http://www.linkedin.com/in/trey-cottingham" className="icon fa-linkedin-square"><span className="label">Email</span></a></li>
            <li><a href="mailto:trey.m.cottingham@gmail.com" target="_blank" onClick="window.open('your WS URL');" className="icon fa-envelope "><span className="label">LinkedIn</span></a></li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
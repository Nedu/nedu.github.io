import React from 'react'
import Link from 'gatsby-link'

import '../styles/resume.css'

const ResumePage = () => (
  <div className="resumePage">
    <div className="resume">
        <div className="resume__contact">
            <div className="resume__contact--name">
                <h1>Nedu Robert</h1>
                <h4>Full Stack Developer</h4>
            </div>
            <div className="resume__contact--info">
            <div><span className="info">Github:</span> nedu</div>
            <div><span className="info">Email:</span> nedumrobert@gmail.com</div>
            <div><span className="info">Portfolio:</span> nedu.github.io</div>
            <div><span className="info">LinkedIn:</span> nedurobert</div>
            </div>
        </div>
        <div className="resume__profile">
            <div className="resume__profile--name">
            <h1>Profile</h1>
            </div>
            <div className="resume__profile--info">
            <div>Highly motivated and demonstrated Full-Stack Developer.</div>
            <div>Fluent in designing and working with RESTful APIs. </div>
            <div>Effective at managing projects both independently and as a team player.</div>
            <div>Quick at adapting to new technologies and learning new skills.</div>
            </div>
        </div>
        <div className="resume__projects">
            <div className="resume__projects--name">
                <h1>Projects</h1>
            </div>
            <div className="resume__projects--info">
                <div className="project">
                    <div><span className="info">WikiSearch</span></div>
                    <div>A Wikipedia article previewer built using React that utilizes the MediaWiki API to search for the user's query.</div>
                </div>
                <div className="project">
                    <div><span className="info">WikiSearch</span></div>
                    <div>A Wikipedia article previewer built using React that utilizes the MediaWiki API to search for the user's query.</div>
                </div>
            </div>
        </div>
        <div className="resume__techskills">
            <div className="resume__techskills--name">
                <h1>Skills</h1>
            </div>
            <div className="resume__techskills--info">
                <div><span className="info">Programming Languages:</span>JavaScript</div>
                <div><span className="info">Frameworks & Libraries:</span> React, Redux, Node.js, Express, Mongoose</div>
                <div><span className="info">Web Technologies:</span> HTML5, CSS3, AJAX</div>
                <div><span className="info">Databases:</span> MongoDB, MySQL</div>
                <div><span className="info">Tools:</span> Git, Heroku</div>
            </div>
        </div>
        <div className="resume__education">
            <div className="resume__education--name">
                <h1>Education</h1>
            </div>
            <div className="resume__education--info">
                <div className="education">
                    <div className="info">B.A, Economics</div>
                    <div>University of Waterloo, Canada</div>
                </div>
                <div>
                    <div className="info">Diploma, Information Technology</div>
                    <div>Trios College</div>
                </div>
            </div>
        </div>
    </div>
  </div>
)

export default ResumePage;
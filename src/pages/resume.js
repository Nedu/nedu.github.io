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
                <div><span className="info">Github:</span> <a href="https://github.com/nedu" >https://github.com/nedu</a></div>
                <div><span className="info">Email:</span> <Link to="/contact">nedumrobert@gmail.com</Link></div>
                <div><span className="info">Portfolio:</span> nedu.github.io</div>
                <div><span className="info">LinkedIn:</span> <a href="https://www.linkedin.com/in/nedurobert/">https://www.linkedin.com/in/nedurobert/</a></div>
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
                    <div className="project-info">
                        <div><span className="info">Closet Roulette </span></div>
                        <div><a href="https://lambda-outfit-creator.herokuapp.com/">https://lambda-outfit-creator.herokuapp.com/</a></div>
                    </div>
                    <div>Full Stack Developer on a team of five that built a digital closet that enables users to upload images of their outfits and transforms them into virtual attire.</div>
                    <div>Utilized the MERN stack to build out the web application and used the Stripe API for onlinepayment processing.</div>
                    <div>Implemented authentication and authorization using token based authentication and OAuth 2.0.</div>
                    <div>Integrated the SendGrid API for delivering of emails to users.</div>
                </div>
                <div className="project">
                    <div className="project-info">
                        <div><span className="info">Lambda Notes</span></div>
                        <div><a href="https://lambda-notes-app.netlify.com/">https://lambda-notes-app.netlify.com/</a></div>
                    </div>
                    <div>Built a Full Stack note taking web application using MERN that allows authenticated users to manage their notes.</div>
                    <div>Incorporated REST architecture and authentication using Express.js, Node.js, Passport and MongoDB to manipulate notes data.</div>
                    <div>Implemented markdown, searching, sorting and exporting functionality.</div>
                </div>                
                <div className="project">
                    <div className="project-info">
                        <div><span className="info">Random Quote Generator</span></div>
                        <div><a href="https://nedu.github.io/RQG/">https://nedu.github.io/RQG/</a></div>
                    </div>
                    <div>Designed and developed a Random Quote Generator web application which displays to the user random quotes on the click of a button using JavaScript ES6+.</div>
                    <div>Incorporated AJAX while utilizing a JSON-encoded, third party external API to fetch the quotes data.</div>
                    <div>Integrated Twitter Web Intents to enable user to tweet out the quotes.</div>
                </div>
                <div className="project">
                    <div className="project-info">
                        <div><span className="info">WikiSearch</span></div>
                        <div><a href="https://nedu.github.io/WikiSearch/">https://nedu.github.io/WikiSearch/</a></div>
                    </div>
                    <div>Engineered a single-page web application in react to enable users search for articles on wikipedia.</div>
                    <div>Utilizes the MediaWiki API to search for the user's query.</div>
                </div>
            </div>
        </div>
        <div className="resume__techskills">
            <div className="resume__techskills--name">
                <h1>Skills</h1>
            </div>
            <div className="resume__techskills--info">
                <div><span className="info">Programming Languages: </span>JavaScript, Python</div>
                <div><span className="info">Frameworks & Libraries:</span> React, Redux, Node, Express, Mongoose, Django</div>
                <div><span className="info">Web Technologies:</span> HTML5, CSS3, AJAX, JSON</div>
                <div><span className="info">Databases:</span> MongoDB, MySQL, SQLite, PostgreSQL</div>
                <div><span className="info">Tools:</span> Git, Heroku</div>
            </div>
        </div>
    </div>
  </div>
)

export default ResumePage;
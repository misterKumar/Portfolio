import React from "react";
import photo from "../images/photo.jpg"


const About = () => {

    return(
        <div className="about">
             <h1>About</h1>
             <img src={photo} alt="Suneel pic" />
             
             <p>
                   Hello everyone! I am thrilled to introduce myself as someone with a passion for software and a track record of success in the industry. With  an year  of experience working as an doubt solving Mentor at Acciojob developing backend and frontend  projects , I have honed my skills and gained invaluable knowledge along the way. <br />
                Beyond my professional endeavors, I have also dedicated a significant portion of my career to teaching and mentoring aspiring software professionals. 
                currently , i am doing full stack developments projects along with data base Management <br />
                Thank you for this opportunity to introduce myself, and I look forward to engaging with all of you in the exciting world of software development .
             </p>
        </div>
    )
}

export default About;
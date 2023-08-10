import React from "react";
import Navbar from "./Components/Nav";
import About from "./Components/About";
import Template from "./Components/Template";


let templateData= [
    {
        title: "SKILLS", 
        details: "A versatile and seasoned Full Stack Developer . Proficient in Data Structures and Algorithms, Backend(Springboot) , Frontend(Html, css, js and React) . Demonstrates robust understanding of data structures, underpinning a firm foundation in problem-solving. Known for writing clean, maintainable code and ability to design, develop, and deploy complex web applications. Excels in dynamic, high-pressure environments, leveraging a solution-oriented mindset and team collaboration. Strives to create user-centric solutions that drive efficiency and improve the overall user experience."
    },
    {
        title: "EXPERIENCE",
        details: "An accomplished  seasoned instructor with a B. Tech in Mechanical Engineering from JNTUK-UCEVizianagaram. With over an year of experience in teaching DSA(Data Structures and Algorithms), my portfolio includes projects across sectors such as  e-commerce,Amazon-clone, Student-library Management System and Book My Show-clone(Backend) and collaborative software like Teams. I've excelled in leadership roles, managing multiple teams and projects, and demonstrated my proficiency in Frontend and Backend through professional training. Beyond practical work,imparting knowledge and nurturing future talent. My strong foundation in Data Structures and Algorithms aids in effective problem-solving and crafting efficient solutions. Adept at working with agile methodologies, version control systems, and test-driven development . This blend of experience, technical skills, leadership, and teaching represents a unique combination, making me well-equipped to tackle complex challenges and drive innovation in any tech-driven role."
    },
    {
        title: "PROJECTS",
        details: "As a seasoned  Developer, I have an expansive portfolio of diverse projects spanning various sectors. I've been instrumental in developing a number of successful e-commerce applications, employing technologies like SpringBoot, MySQL, HTML, css, js and react  to deliver seamless, user-friendly experiences. At Acciojob, I made projects like E-commerce , student library Mangement system and book my show clone in backend and Amazon clone in frontend with detailed interactive and user friendly . Additionally, I developed an innovative implementation in student library management system with MySQL database and additional features in amazon clone also . This project exhibited my skills in ideation, design, and full-cycle development. Beyond development, I've provided strategic ideas in doubt solving skills of data structures and algorithms helping to establish their coding skills to top. This role required not just techie, but also leadership, communication skills, and a deep understanding of the tech industry. Overall, my project experiences demonstrate a solid mix of technical prowess, creativity, leadership, and a strong drive to deliver high-quality software solutions."
    }
]


const App = () => {


    return(
        <div>
            <Navbar />
            <About /> 
            {
                 templateData.map((value,index)=>(
                    
                        <Template
                        title = {value.title}
                        details = {value.details}
                        />
                    ))
            }
            
        </div>
    )
}



export default App;

// loops => map, filter, reduce . forEach (higher order functions)
// if else => ternary operator
import React from "react";
import AboutMe from "../containers/AboutMe";
import JobHistory from "../containers/jobHistory/JobHistory";
import Skills from "../containers/Skills";
import Education from "../containers/Education";
import Projects from "../containers/Projects";


import './Home.scss';


function Home() {

    return (
        <div className="Home">
            {/*<Slider/>*/}
            <AboutMe/>
            <JobHistory/>
            <Skills/>
            <Projects/>
            <Education/>
        </div>
    );
}

export default Home;

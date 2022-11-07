import React, {useContext} from "react";
import SegmentTitle from "../components/SegmentTitle";
import DownloadButton from "../components/Button/DownloadButton";
import skills from "../assets/skills.png";
import myResume from "../assets/RezaKameli-FrontendDev.pdf"
import SwitchContext from "../context/ThemeSwitch";

import './Skills.scss';


function Skills() {
    const {lightTheme} = useContext(SwitchContext);
    //
    // if ('serviceWorker' in navigator && 'SyncManager' in window) {
    //     navigator.serviceWorker.ready.then(sw => {
    //         return sw.sync.register("task-1")
    //     })
    // }

    return (
        <section className='Skills'>
            <SegmentTitle title={"Skills"} src={skills} alt={'Skills'}/>
            <div className='skillItems'>

                <div className='item'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                    <div className='shadow'/>
                    <div className='number'><span>1</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>React JS</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>An open-source JavaScript library that is used
                            for building user interfaces specifically for
                            single-page applications
                        </h5>
                    </div>
                </div>

                <div className='item2'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,44,45,1) 100%)"}}>
                    <div className='shadow2'/>
                    <div className='number2'><span>2</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>Javascript</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>JavaScript is a text-based programming
                            language used both on the client-side and server-side
                            that allows you to make web pages interactive.</h5>
                    </div>
                </div>

                <div className='item'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                    <div className='shadow'/>
                    <div className='number'><span>3</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>CSS3-SASS-Emotion</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>Cascading Style Sheets is a stylesheet
                            language used to describe the presentation of a
                            document written in HTML or XML.</h5>
                    </div>
                </div>

                <div className='item2'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,44,45,1) 100%)"}}>
                    <div className='shadow2'/>
                    <div className='number2'><span>4</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>HTML 5</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>HTML (HyperText Markup Language) is the most
                            basic building block of the Web</h5>
                    </div>
                </div>
                <div className='item'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                    <div className='shadow'/>
                    <div className='number'><span>5</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>Redux - Context</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>Redux is simply a store to store the state of
                            the variables in your app, Redux and Context
                            are a state manager.</h5>
                    </div>
                </div>
                <div className='item2'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,44,45,1) 100%)"}}>
                    <div className='shadow2'/>
                    <div className='number2'><span>6</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>Next JS</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>A React framework that helps to create SSR web
                            applications</h5>
                    </div>
                </div>
                <div className='item'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                    <div className='shadow'/>
                    <div className='number'><span>7</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>PWA</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>progressive web app, is a type of application
                            software delivered through the web, built using common web technologies including HTML, CSS,
                            JavaScript, and WebAssembly.</h5>
                    </div>
                </div>
                <div className='item2'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                    <div className='shadow2'/>
                    <div className='number2'><span>8</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>React native</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>React Native is an open-source JavaScript
                            framework, designed for building apps on multiple platforms like iOS, Android, and also web
                            applications, utilizing the very same code base</h5>
                    </div>
                </div>
                <div className='item'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,44,45,1) 100%)"}}>
                    <div className='shadow'/>
                    <div className='number'><span>9</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>Typescript</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>TypeScript is a programming language first
                            developed by Microsoft in 2012. Its main ambition is to improve the productivity of
                            developing complex applications.</h5>
                    </div>
                </div>
                <div className='item2'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,44,45,1) 100%)"}}>
                    <div className='shadow2'/>
                    <div className='number2'><span>10</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>Other Skills</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>Git, npm, CSS libraries, Photoshop, SEO,
                            Office, Google analysis tools, ...</h5>
                    </div>
                </div>
            </div>
            <DownloadButton content={"Download My Resume"} file={myResume}/>
        </section>
    );
}

export default Skills;

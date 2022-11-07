import React, {useContext, useEffect} from "react";
import SegmentTitle from "../components/SegmentTitle";
import aboutMe from '../assets/aboutMe2.png'
import SwitchContext from "../context/ThemeSwitch";
import AOS from "aos";

import "aos/dist/aos.css";
import './AboutMe.scss'


function AboutMe() {
    const {lightTheme} = useContext(SwitchContext);
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, [])
    return (
        <section className='aboutMe'>
            {/*<SegmentTitle title={"About Me"} src={aboutMe} alt={'About Me'}/>*/}
            <div className='contentَAboutMe' >

                <p className='textAboutMe' style={!lightTheme ? {} : {color: "#a9a9a9"}} data-aos="fade-right" >
                    Innovative frontend developer with about 3 years of experience in developing and maintaining
                    responsive websites focus on UI/UX interface in React JS library. Proficient in code
                    development
                    projects in modern working methodologies Plus, over 4 years of experience in marketing and
                    SEO, make
                    me a comprehensive perspective on different aspects of the business.
                </p>


                <div className='imgFrame' />

            </div>
        </section>
    );
}

export default AboutMe;

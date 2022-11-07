import React, {useContext} from "react";
import SegmentTitle from "../components/SegmentTitle";
import Storyboard from "../assets/Storyboard.png";
import projects from "../assets/Projects.png";
import starPayProject from "../assets/starPayProject.png"
import panelDashboard from "../assets/Panel dashboard.png"
import zeeroApp from "../assets/zeeroApp.png"
import ButtonContactMe from "../components/Button/ButtonContactMe";
import SwitchContext from "../context/ThemeSwitch";

import './Projects.scss';

function Projects() {
    const {lightTheme} = useContext(SwitchContext);

    return (
        <section className='Projects' >
            <SegmentTitle title={"Projects"} src={Storyboard} alt={'projects'}/>
            <div className='projectsContent'
               >
                <div className='projectsCard' style={!lightTheme ? {} : {boxShadow: '0px 0px 15px -9px #077e5c'}}>
                    <img src={projects} alt=""/>
                    <div>
                        <h3 data-aos="fade-up" data-aos-duration='500'
                            style={!lightTheme ? {} : {color: "#a9a9a9"}}>Sales reporting panel | React JS </h3>
                        <p data-aos="fade-up" data-aos-duration='500' style={!lightTheme ? {} : {color: "#a9a9a9"}}>
                            A sales report panel by a collection of metrics, quantitative data and qualitative inputs
                            that
                            helps to evaluate sales performance within a team, region, division or organization.
                            This site helps sales managers and their team members to understand better how they are
                            performing.
                        </p>
                        <ButtonContactMe href={"https://panel-zeta-virid.vercel.app/"} content={'Look it'} width={'40%'}
                                         height={'50px'}/>
                    </div>
                </div>
                <div className='projectsCard' style={!lightTheme ? {} : {boxShadow: '0px 0px 15px -9px #077e5c'}}>
                    <img src={starPayProject} alt=""/>
                    <div>
                        <h3 data-aos="fade-up" data-aos-duration='500'
                            style={!lightTheme ? {} : {color: "#a9a9a9"}}>Payment services website | Next JS</h3>
                        <p data-aos="fade-up" data-aos-duration='500' style={!lightTheme ? {} : {color: "#a9a9a9"}}>
                            The online payment portal is one of our services, which is built to improve the
                            financial process of small and large businesses by selling their products compared to other
                            methods such as on-site payment.
                        </p>
                        <ButtonContactMe href={"https://star-pay-next-jjq8-o2o0l4yxj-rkamely.vercel.app/"}
                                         content={'Look it'} width={'40%'} height={'50px'}/>
                    </div>
                </div>
                <div className='projectsCard' style={!lightTheme ? {} : {boxShadow: '0px 0px 15px -9px #077e5c'}}>
                    <img src={panelDashboard} alt=""/>
                    <div>
                        <h3 data-aos="fade-up" data-aos-duration='500'
                            style={!lightTheme ? {} : {color: "#a9a9a9"}}>Panel dashboard | React JS</h3>
                        <p data-aos="fade-up" data-aos-duration='500' style={!lightTheme ? {} : {color: "#a9a9a9"}}>
                            A sales dashboard that enables c-level executives and managers to effectively
                            control sales KPIs and monitor them in one central place while helping teams to reach sales
                            goals through detailed analyses of sales performance, cycle lengths, and sales funnels.
                        </p>
                        <ButtonContactMe href={"https://behsa-sms.vercel.app/"}
                                         content={'Look it'} width={'40%'} height={'50px'}/>
                    </div>
                </div>
                <div className='projectsCard' style={!lightTheme ? {} : {boxShadow: '0px 0px 15px -9px #077e5c'}}>
                    <img src={zeeroApp} alt=""/>
                    <div>
                        <h3 data-aos="fade-up" data-aos-duration='500'
                            style={!lightTheme ? {} : {color: "#a9a9a9"}}>Zeero (Android app) | React native</h3>
                        <p data-aos="fade-up" data-aos-duration='500' style={!lightTheme ? {} : {color: "#a9a9a9"}}>
                            Zeero is reinventing transportation methods by offering electric micro-mobility options.
                            Take a Zeero electric vehicles and enjoy sustainable and Zeero emission mobility.
                            All joyful rides with our fully electric mopeds, bikes and scooters turn our cities greener
                            and cleaner.
                        </p>
                        <ButtonContactMe href={"https://play.google.com/store/apps/details?id=ir.zeero&hl=en&gl=US"}
                                         content={'Look it'} width={'40%'} height={'50px'}/>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Projects;

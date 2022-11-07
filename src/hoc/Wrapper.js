import React, {useContext} from "react";
import {Route} from "react-router-dom";
import Header from "../containers/Header"
import Footer from "../containers/Footer"
import SwitchContext from "../context/ThemeSwitch";

import './Wrapper.scss';

export default function Wrapper({component: Component, ...rest}) {
    const {lightTheme} = useContext(SwitchContext);
    return (
        <Route {...rest} render={matchProps => (
            <main className='ٌWrapper'
                  style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 80%, rgba(5,59,61,1) 100%)"}}>
                <Header/>
                <Component {...matchProps}/>
                <Footer/>
            </main>
        )}/>
    )
}

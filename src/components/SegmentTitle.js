import React, {useContext} from "react";
import SwitchContext from "../context/ThemeSwitch";

import './SegmentTitle.scss';


function SegmentTitle(props) {
    const {lightTheme} = useContext(SwitchContext);

    return (


        <div className='SegmentTitle' style={!lightTheme ? {} : {borderBottom: '.5px solid #073638'} } >
            <h1 style={!lightTheme ? {} : {color: "#a9a9a9"}} data-aos="fade-right">{props.title}</h1>
            <img src={props.src} alt={props.alt} data-aos="fade-left"/>
        </div>

    );
}

export default SegmentTitle;

import React from "react";


import './ButtonContactMe.scss';

function ButtonContactMe(props) {
    return (
        <button className='ButtonContactMe' style={{height: props.height, maxWidth: props.width}}
                type={"submit"}><a href={props.href} target="_blank">{props.content} </a></button>

    );
}

export default ButtonContactMe;

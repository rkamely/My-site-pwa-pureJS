import React from "react";

import notFound from "../assets/404page.jpg"


import './UnCached.scss';


function UnCached() {

    return (
        <img className="UnCached" src={notFound} alt={"notFound"}/>

    );
}

export default UnCached;

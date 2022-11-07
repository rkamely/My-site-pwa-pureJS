import React from "react";
import {Link} from "react-router-dom";

import './DownloadButton.scss';


function DownloadButton({content,file}) {


    return (
        <Link to={file} id="downloadBtn" className='downloadBtn' download target="_blank">{content}</Link>
    );
}

export default DownloadButton;

import React, {useContext} from "react";

import './NormalContactInput.scss';
import SwitchContext from "../../context/ThemeSwitch";

function NormalContactInput({inputOnchange, property, placeHolder,value}) {

    const {lightTheme} = useContext(SwitchContext);

    return (
        <input onChange={e => inputOnchange(e.target.value, property)}
               className='normalContactInput' type="text"
               placeholder={placeHolder}
               style={!lightTheme ? {} : {background: "#d2d3d3"}}
        />
    );
}

export default NormalContactInput;

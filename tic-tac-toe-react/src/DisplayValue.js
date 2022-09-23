import React from "react";

const DisplayValue= (props)=>{
    <span
        onClick={() => props.onClick(props.index)}
        {...props.state}>
    </span>
}
export default DisplayValue;

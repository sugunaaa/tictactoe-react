import React from "react";

const DisplayValue= (props)=>{
    <span
        onClick={() => props.onClick(props.CellClickedIndex)}>
        {props.state}
    </span>
}
export default DisplayValue;

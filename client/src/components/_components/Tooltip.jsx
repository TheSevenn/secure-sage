import React from "react";

import { TooltipStyles } from "../../assests/styles";



export function Tooltip({title}){
    return (
<span style={TooltipStyles}>{title}</span>
    )
}
import React from "react";

type AccordionPropsType = {
    value: boolean
}

function Accordion(props:AccordionPropsType) {
    if (props.value === true)
    return (
        <div>
            <h1>Menu</h1>
            <h3>1</h3>
            <h3>2</h3>
            <h3>3</h3>
            <h3>4</h3>
        </div>
    )
    return (
        <h1>Menu</h1>
    )
}

export default Accordion;
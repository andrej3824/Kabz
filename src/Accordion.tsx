import React from 'react';
import './App.css';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}


type AccodrionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccodrionTitlePropsType) {
    return (
        <h3>-- {props.title} --</h3>
    )
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion
















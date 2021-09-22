
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion (props: AccordionPropsType) {

    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    }
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

}

export default Accordion
















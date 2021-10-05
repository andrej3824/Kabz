import React from 'react';
import './App.css';


type RatingPropsType =  {
    value: 1 | 2 | 3 | 4 | 5
}

function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected) {
        return <span>
        <b>star</b>
    </span>
    } else {
        return <span>
        star
    </span>
    }
}

export default Rating

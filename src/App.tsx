import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/onOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className={"App"}>

            <OnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating value={0}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}


export default App;

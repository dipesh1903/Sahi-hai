import React,{useEffect} from 'react';

const DateList = (props) => {
    
    return (
        <div>
        {props.dates.map((val,index) => {
            return <li key={index}>{val}</li>
        })}
        </div>
    )
}

export default DateList;
import React,{useEffect,useContext, useRef} from 'react'
import {context} from './AppContext';
import {Link, Route} from 'react-router-dom'
import AddMemory from './AddMemory';
import {clickCont} from './ClickContext'
import DateList from './dateList'

const Detail = (props) => 
{

    let dates = useRef()
    let times = useRef()
    let dateShow = useRef([])
    

   let {state1, dispatch1} = useContext(clickCont)
   let {state, dispatch} = useContext(context)
   let [date, setDates] = React.useState([])

   useEffect(() => {
       console.log("ssvskenkn kjnkjn kkkkkkkkkkkkkkkkkkk")
       dates.current = new Set()
       times.current = new Set()
       if (state.entries[props.id] !== undefined){
        {
            var i = state.entries[props.id].memory_id
            i.map((val,index) => {
                dates.current.add(state.entries[props.id].memory[val].date)
                times.current.add(state.entries[props.id].memory[val].time)
            })
            
        }
        var y = times.current
        dateShow.current = []
        dateShow.current = [...y]
        console.log(dateShow)
        
    }
   })

    const clicking = (e) => {
        e.preventDefault();
        dispatch1({type:'CLICKED',clicked:true})
        props.history.push(`${props.match.url}/add`)

    }
    

    return (
        <div style={{display:'flex',flexFlow:'column wrap',justifyContent:'center'}}>
        <p>{props.id}</p>
        {
            state.entries[props.id] === undefined ? null : <DateList dates={dateShow.current}/>
        }
        <button onClick={clicking}>Add memory</button>
        <div className="wrapper">
        {!state1.clicked ? null :
        <Route  path={`${props.match.url}/add`} render={() => <AddMemory id={props.id} {...props} />}/>
        }
        </div>
        </div>
    )
}

export default Detail;
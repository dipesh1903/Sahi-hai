import React,{useContext} from 'react';
import {context} from './AppContext'
import {Link, Route} from 'react-router-dom'

import Detail from './details'
const Diary = (props) => {

    React.useEffect(()=>{
    })

    let {state} = useContext(context)
    return (

        <div style={{display:'flex',flexFlow:'column wrap',alignItems:'center',justifyContent:'center'}}>
        {
            Object.keys(state.diary).map((key) => {
                return <Link  to={`${props.match.url}/${state.diary[key].name}`}><p>{state.diary[key].name}</p></Link>
            })
        }
        <Link to ='/diary/create'><button>add more</button></Link>
        </div>
    )
}

export default Diary
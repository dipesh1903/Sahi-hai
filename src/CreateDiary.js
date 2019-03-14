import React,{useContext, useRef,useEffect} from 'react';
import {context} from './AppContext';
import {Link} from 'react-router-dom'

const Creatediary = (props) => {

    let name = useRef()
    let about = useRef()
    let {state, dispatch} = useContext(context)
    useEffect(()=> {
        console.log(state)
    })

    const onClick = (e) => {
        e.preventDefault()
        dispatch({type:'ADD_DIARY',id:name.current.value,name:name.current.value,about:about.current.value})
        props.history.push('/diaries')
        console.log(state)
    }

    return (
        <div style={{display:'flex',flexFlow:'column wrap',alignItems:'center',justifyContent:'center'}}>
        <form>
        MEMORY NAME:
        <br/>
        <input ref={name} type="text" placeholder="memory" required />
        <br/>
        ABOUT MEMORY:
        <br/>
        <textarea ref={about} rows="10"cols="40"></textarea>
        <br/>
        <button onClick={onClick}>WELOME</button>
        </form>
        </div>
    )

}

export default Creatediary;


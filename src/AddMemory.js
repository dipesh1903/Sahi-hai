import React,{useRef,useContext} from 'react';
import {context} from './AppContext';
import {clickCont} from './ClickContext';

const AddMemory = (props) => {

    let alfaaz = useRef();
    const {state, dispatch} = useContext(context)
    const {dispatch1} = useContext(clickCont);

    React.useEffect(()=>{
        console.log("hello")
    })
    const addAlfaaz = (e) => {
        e.preventDefault()
        var memoryId = ''
        if(state.entries[props.id] === undefined)
        memoryId = '1'
        else {

        var id = state.entries[props.id].memory_id[state.entries[props.id].memory_id.length-1]
            var i = id;
            i = parseInt(i)
            i = i + 1;
            memoryId = i.toString()
        }
        console.log(alfaaz.current.value)
        dispatch({type:'ADD_ENTRY',memoryId:memoryId,alfaaz:alfaaz.current.value,id:props.id})
        console.log(state)
        dispatch1({type:'CLICKED',clicked:false})
    }
    return (
        <form>
        <textarea rows="10" cols="10" ref={alfaaz}></textarea>
        <p>fvjhnbkjnk</p>
        <button onClick={addAlfaaz}> yaadien</button>
        </form>
    )
}

export default AddMemory;
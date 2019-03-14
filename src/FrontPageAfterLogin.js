import React,{useEffect,useState} from 'react';
import './initial.css';
import {Link} from 'react-router-dom';
const FrontAfterLogged = () => {

    const [hover,sethover] = useState(false)
    const hoverStyle = {
            background: 'white',
            border: '2px solid black',
            color:'black',
          fontSize:'20px',
          padding:'1% 2%',
          marginTop:'1%',
          cursor:'pointer',
    }

    const unhoverStyle = 
    {padding:'1% 2%',marginTop:'1%',border:'2px solid black',background:'#000000',color:'white',fontSize:'20px',transitionDuration:'0.4s'}

    return (
        <div className="flex-container1">
        <h1 style={{fontFamily:'Roboto,sans-serif',fontSize:'100px'}}>DIARY</h1>
        <p style={{fontSize:'50px',paddingBottom:'0',marginBottom:'0',fontFamily:'chalkduster, fantasy'}}>Share with your future self</p>
        <Link to="/diary/create"> <button onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} style={hover? hoverStyle : unhoverStyle}>Lets  write</button></Link>
        </div>
    )
}

export default FrontAfterLogged;
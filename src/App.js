import React, {useContext} from 'react';
import './App.css';
import FrontAfterLogged from './FrontPageAfterLogin';
import {Switch,Route} from 'react-router-dom'
import Creatediary from './CreateDiary';
import Diary from './diary'
import {context} from './AppContext'
import Detail from './details'
import axios from 'axios';
const App = (props) => {

  const change = (e) => {
    e.preventDefault();
    fetch('http://everyonicweb.com/recharge_api/recharge?member_id=8011467970&api_password=123456&api_pin=92182&number=8670592956&opcode=12&amount=10&request_id=AR375022344&field1=&field2=')
    .then((response) => {
      console.log(response)
    }).catch((error)=>{
      console.log(error)
    })
  }

   const {state} = useContext(context);
    return (
      <div>
      <button onClick={change}></button>
        <Switch>
        <Route exact path='/' component = {FrontAfterLogged}/>
        <Route exact path='/diary/create' component={Creatediary}/>
        <Route exact path='/diaries' component={Diary}/>
        {
          state.id.map((val,index) => {
            return <Route key={index}  path ={`/diaries/${val}`} render = {(props) => <Detail id={val} {...props} />}/>
          })
        }
        </Switch>
      </div>
    );
  }

export default App;

import React,{useReducer} from 'react';

let context = React.createContext();

let initialState = {
    id:[],
    diary:{
        name:'',
        about:''
    },
    entries:{
       memory_id:[],
       memory:{
           alfaaz:'',
           date:null,
           time:null
       }
    }
}

let reducer = (state,action) => {
    switch(action.type){
        case 'ADD_DIARY':
        console.log(action)
        let id = [...state.id,action.id]
         return {
             id:id,
             diary:{
                 ...state.diary,
                 [action.id]:{
                     name:action.name,
                     about:action.about
                 }
             },
             entries:{
                 ...state.entries,
             }
         }
         case 'ADD_ENTRY':
         console.log(action)
         var klm = state.entries[action.id] === undefined ? state.entries : state.entries[action.id]
         return {
             id:[...state.id],
             diary:{...state.diary},
             entries:{
                 ...state.entries,
                 [action.id]:{
                    memory_id:[...klm.memory_id,action.memoryId],
                    memory:{
                        ...klm.memory,
                        [action.memoryId]:{
                            alfaaz:action.alfaaz,
                            date:new Date().toLocaleDateString(),
                            time:new Date().toTimeString()
                        }
                    }

                }
            }
        }
        case  'DELETE_DIARY':
        var arr = state.id.filter((val,index) => {
            return val !== action.id
        })
         var newDiary = {}
         var newEntries={}
        const keys = Object.keys(state.diary)
        for (var key in keys) {
            if (key !== action.id)
            {
                newDiary[key] = state.diary[key]
                newEntries[key]=state.entries[key]
            }
        }
        return {
            id:arr,
            diary:newDiary,
            entries:newEntries
        }
        case 'DELETE_ENTRY':
        var newMemory={}
        var mem_id = state.entries[action.id].memory_id.filter((val,index) => {
            return val !== action.memoryId
        })
             var kk = Object.keys(state.entries[action.id].memory)
                for(var i in kk){
                    if(i !== action.memoryId ){
                        newMemory[i] = state.entries[action.id].memory[i]
                    }
                }
        return {
            id:state.id,
            diary:state.diary,
            entries:{
                memory_id:mem_id,
                memory:newMemory
            }
        }
        case 'UPDATE_DIARY':
        if(action.hasOwnProperty('name') && action.hasOwnProperty('about')){
            return {
                id:state.id,
                diary:{
                    ...state.diary,
                    [action.id]:{
                        name:action.name,
                        about:action.about
                    }
                },
                entries:state.entries
            }

        } else if(action.hasOwnProperty('name')){
            return {
                id:state.id,
                diary:{
                    ...state.diary,
                    [action.id]:{
                        name:action.name,
                        about:state.diary[action.id].about
                    }
                },
                entries:state.entries
            }

        } else {
            return {
                id:state.id,
                diary:{
                    ...state.diary,
                    [action.id]:{
                        about:action.about,
                        name:state.diary[action.id].name
                    }
                },
                entries:state.entries
            }
        }

        case 'UPDATE_ENTRY':
        return {
            id:state.id,
            diary:state.diary,
            entries:{
                ...state.entries,
                [action.id]:{
                    memory_id:state.entries.memory_id,
                    memory:{
                        ...state.entries.memory,
                        [action.memoryId]:{
                            alfaaz:action.alfaaz,
                            date:new Date().toDateString(),
                            time:new Date().toTimeString()
                        }
                    }
                }
            }
        }
         default:
         return state
    }
}
let Appcontext = (props) => {

    let [state,dispatch] = useReducer(reducer,initialState)
    let value = {state,dispatch}
    return (
        <context.Provider value={value}>
        {props.children}
        </context.Provider>
    )
}

let contextConsumer = context.Consumer
export {context,contextConsumer, Appcontext}
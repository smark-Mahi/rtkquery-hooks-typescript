import React,{useReducer} from 'react'
import {formReducer,INITIAL_STATE} from '../formReducer'
const UsePost = () => {
    const [state,dispatch]=useReducer(formReducer,INITIAL_STATE)
  return {dispatch,state}
}

export default UsePost
import { useState,useId } from 'react'
import {useGetPostsQuery,useAddPostMutation,useUpdataPostMutation,useDeletePostMutation} from './features/apiiSlice'
import UsePost from './customhooks/UsePost'
function App() {
//const [state,dispatch]=useReducer(formReducer,INITIAL_STATE)
const {state,dispatch}=UsePost()
const {name,country}=state

//const id=useId()


  const {
    isLoading,
    data,
    error,
  isSuccess,
  isError}=useGetPostsQuery()
    const [addPost]=useAddPostMutation()
    //const [updatePost]=useUpdataPostMutation()
    const [deletePost]=useDeletePostMutation()
console.log(data)
  if(isLoading){
    return <div>loading...</div>
  }
  if(isError){
    return <div>{error.message}</div>
  }
  const submitt=async(e)=>{
    try{
      e.preventDefault();
      dispatch({type:'success'})
      await addPost(state).unwrap()
    }
   catch(err){
    console.log(err)
   }
  }
  const handledelete=async(id)=>{
    await deletePost(id)

  }
  function change(e){
    dispatch({type:'CHANGE_NAME',payload:{name:e.target.name,value:e.target.value}})
  }
  console.log(state.name)
  const newpostt=
  <form onSubmit={submitt}>
  <label>Enter new post</label>
  <input value={name} onChange={change} placeholder='name' name='name'/>
  <input value={country} onChange={change} placeholder='country' name='country'/>
  <input value={state.fav_color} onChange={change} placeholder='fav_color' name='fav_color'/>
  <button>save</button>
  </form>
let content;
if(isSuccess){
  content=<div>
  {
    data.slice(0,6).map((post)=><div key={post.id}>
    <li>{post.id}</li>
    <li>{post.name.slice(0,6)}...</li>
    <button onClick={()=>handledelete(post.id)}>deletepost</button>
    </div>
    )
  }
</div>
}
  return (
    <div>
    <h1>Todo List</h1>
            {newpostt}
            {content}
    </div>
  )
}

export default App;
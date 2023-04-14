import react from 'react'
import {usePostQuery} from './features/apiiSlice'
const Post=({id})=>{
    const {data,isLoading,error}=usePostQuery(id)

    if(isLoading){
        return <div>loading...</div>
      }
      if(error){
        return <div>{error.message}</div>
      }
    if(!data){
        return <p>data not found...</p>
    }
    let content=(
        <div>
      <li>{data.id}</li>
      <li>{data.title}</li>
  </div>
    )
    return content
}

export default Post
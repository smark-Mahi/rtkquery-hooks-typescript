import React,{useState,useEffect} from 'react';

interface apidataa{
avatar: string
birth_date:string
country:string
fav_color:string
id:string
name:string
}
function App() {
  //apidata
  const [apidata,setapidata]=useState<apidataa[]>()
const getapidata: () => Promise<void>=async()=>{
    const resp=await fetch('https://63a5d671f8f3f6d4ab011f37.mockapi.io/api/v1/users')
    const data=await resp.json()
    setapidata(data)
    console.log(data)
}
useEffect(()=>{
  getapidata()
},[])
console.log(apidata)
if(!apidata){return <h2>No user found</h2>}
const content=<div>
  {
    apidata?.map((item)=>
    <div>
      <h4>{item.name}</h4>
    </div>)
  }
</div>
  return (
    content
  );
}

export default App;

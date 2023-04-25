import React from 'react'
import { useSearchParams } from 'react-router-dom'
function Filter() {
    const[searchParams,setSearchParmas]=useSearchParams();
    const age=searchParams.get('age');
    const city=searchParams.get('city');
    console.warn(age);
  return (
    <div>
      <h1>Filter page</h1>
      <h3>Age is {age}</h3>
      <h3>City is {city}</h3>
      <button onClick={()=>setSearchParmas({age:60})}>Set age</button>
      <input type="text" onChange={(e)=>setSearchParmas({text:e.target.value,age:70})}/>
    </div>
  )
}
export default Filter
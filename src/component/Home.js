import React from 'react'
import { Link,useLocation,useNavigate} from 'react-router-dom'
function Home() {
  const location=useLocation();
    console.log(location)
    const navigate=useNavigate();
    function hii(){
        let x=false;
        if(x){
            navigate('/about')
        }
        else{
            navigate('/filter')
        }
    }
     
  return (
    <div>
      <h1>Home</h1>
      <p>kapil tomar is my name and where are you today i am waiting for you for an hour.<b>Thank! You</b></p>
      <p>Ok NO  Problem Home page</p>
      <Link  to='/about' >GO to about page</Link>
      <br/>
      <button onClick={()=>navigate('/about')}>Goto about page</button>
      <br/>
      <button onClick={hii}>Go to filter page</button>
      </div>
  )
}
export default Home

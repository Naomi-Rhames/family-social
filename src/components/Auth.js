 import { useState } from 'react'
//  import { subnmitSignup} from '../redux/actionCreators'
//  import { connect } from 'react'
 import { useHistory} from 'react-router'


function Auth(props){
    const [signup, setSignup] = useState(false)
    const [ imageUrl, setImageUrl ] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail ] = useState("")
    const [ bio, setBio] = useState("")
    const [ password, setPassword] = useState("")
    const history = useHistory()


    const toggleSignup = () => setSignup(!signup)

    const handleSubmit = (e) => {
         e.preventDefault()
         signup ? props.submitSignup({ email, username, bio, password }) : props.submitLogin({ username, password })
         history.push("/events")
    
    }


    return <>
  <form onSubmit={handleSubmit}>
       {signup && <label>
      Add Profile Picture:
      <input type="text" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder='Add Picture Here'/><br/>
    </label>}<br/>
    {signup && <label>
       Email:
         <input type="email" name="email" value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/><br/>
        </label> }<br/>
       
        <label>
        Username:
         <input type="text" name="username" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
        </label><br/>
       <label>
        Password:
         <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        { signup && <p><i><label><br/>
        Bio:
         <textarea type="text" name="name" placeholder='Tell people about yourself!' value={bio} onChange={(e) => setBio(e.target.value)}/>
        </label></i></p> }
        <br/>
        <input type="submit" value="Submit"/> 
  
  </form>
<br/>
<button onClick={toggleSignup}> Or {signup ? "Login!": "Signup!"}</button>
    </>
}

export default Auth;

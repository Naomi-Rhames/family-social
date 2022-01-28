 import { useState } from 'react'
// import { useHistory} from 'react-router'
/// import { connect } from 'react'

function Auth(){
    const [signup, setSignup] = useState(false)
    const [username, setUsername] = useState("")
    const [email, setEmail ] = useState("")
    const [ bio, setBio] = useState("")
    const [ password, setPassword] = useState("")

    return <>
  <form>
  <label>
      Add Profile Picture:
      <input type="text" name="imageUrl" placeholder='Add Picture Here'/><br/>
    </label><br/>

    <label>
        Email:
        <input type="email" name="email" placeholder='Enter Email'/><br/>
    </label><br/>

    <label>
        Username:
        <input type="text" name="username" placeholder="Create Username" /><br/>
    </label><br/>
    <label>
        Bio
        <textarea type="text" name="name" placeholder="Enter something about yourself!"/><br/>
    </label><br/>

    <label>
        Password:
        <input type="password" name="password" placeholder="Create Password" /><br/>
    </label><br/>

  </form>
    </>
}

export default Auth;
 import { useState } from 'react'
// import { useHistory} from 'react-router'
/// import { connect } from 'react'

function Auth(props){
    const [signup, setSignup] = useState(false)
    const [ imageUrl, setImageUrl ] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail ] = useState("")
    const [ bio, setBio] = useState("")
    const [ password, setPassword] = useState("")

    const handleSubmit = (e) => {
        console.log(e)
         e.preventDefault()
    
    }


    return <>
  <form onSubmit={handleSubmit}>
  <label>
      Add Profile Picture:
      <input type="text" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder='Add Picture Here'/><br/>
    </label><br/>
    <label>
        Email:
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'/><br/>
    </label><br/>
    <label>
        Username:
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Create Username" /><br/>
    </label><br/>
    <label>
        Bio
        <textarea type="text" name="name"  value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Enter something about yourself!"/><br/>
    </label><br/>
    <label>
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create Password" /><br/>
    </label><br/>
<button>Signup</button>
  </form>
    </>
}

export default Auth;
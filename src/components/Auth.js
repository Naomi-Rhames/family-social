// import { useState } from 'react'





function Auth(){

    return <>
  <form>
  <label>
      Add Profile Picture:
      <input type="text" name="imageUrl" placeholder='Add Picture Here'/><br/>
    </label><br/>

    <label>
        Email:
        <input type="email" name="email"/><br/>
    </label><br/>

    <label>
        Username:
        <input type="text" name="username" /><br/>
    </label><br/>
    <label>
        Bio
        <textarea type="text" name="name"/><br/>
    </label><br/>

    <label>
        Password:
        <input type="password" name="password" /><br/>
    </label><br/>

  </form>
    </>
}

export default Auth;
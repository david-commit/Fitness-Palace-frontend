import React from 'react'
import './SignUp.css'
import { Link, useHistory} from 'react-router-dom'
function SignUp() {
  const history = useHistory()
  function signupUser(e){
  e.preventDefault()
    console.log("Signup Attempt")
    let password = document.getElementById('exampleInputPassword1').value
    console.log(password)
    let signupFails=false
    if (password.length < 8 ) {
     signupFails = true
    }
      if (signupFails)  {
        console.log("Signup Failed")
    // return <Redirect to='/login'  />
    history.push('/signup')
      }
      else {
        history.push('/')
      }
    // return <Redirect to='/signup'  />
  }
  return (
      <div className='sign'>
        <div className='signup-body'>
        <h2 className='signup'>SIGN UP</h2>
        <form>
  <div class="mb-3" className='input-fields'>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='First Name' />
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Last Name' />
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
      </div>
   <div class="mb-3">
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password' minLength={8}/>
  </div>
    <div class="mb-3">
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Confirm Password' minLength={8}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">I agree to <span id='terms'> terms of service and privacy policy </span> </label>
  </div>
  <button type="submit" class="btn btn-primary" className='create-account' onClick={signupUser}>CREATE AN ACCOUNT</button>
</form>
  </div>
</div>
  )
}
export default SignUp;
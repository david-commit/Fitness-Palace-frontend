import React from 'react'
import "./Login.css"
import profile from '../img/png-clipart-gym-logo-mark-gym.png'


function Login() {
  return (
    <div className='main'>
      <div className='sub-main'>
        <div className='image'>
          <div className='image-container'>
            <img src={profile} alt='profile' className='profile'></img>
            
          </div>
          <div>
           
            <h1 id='login'>LOG IN</h1>
           
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember</label>
    <h4> <a href="#">  Forgot your password? </a> </h4>
   
   
  </div>
  <button type="submit" class="btn btn-light" className='login-button'>Log In</button>
</form>
<div>
    <h4 id='newmbr'> New member? <a href="#" id='create-acc'>  Create Account</a>
  </h4>
  
  </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Login
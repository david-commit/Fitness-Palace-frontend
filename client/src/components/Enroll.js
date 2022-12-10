import React, { useRef, useState } from 'react';
import './Enroll.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const baseApiUrl = 'http://localhost/8000';
function Enroll() {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cpasswordRef = useRef();
  // const [user, setUser] = useState([]);
  // console.log(user);

  const [fname, setfname] = useState([]);
  const [lname, setlname] = useState([]);
  const [email, setEmail] = useState([]);
  const [pass, setPass] = useState([]);
  const [cpass, setCpass] = useState([]);

  const history = useHistory();
  function enrollUser(e) {
    e.preventDefault();
    console.log('Enroll Attempt');
    let password = document.getElementById('exampleInputPassword1').value;
    console.log(password);
    let enrollFails = false;
    if (password.length < 8) {
      enrollFails = true;
    }
    if (enrollFails) {
      console.log('enroll Failed');
      // return <Redirect to='/login'  />
      history.push('/enroll');
    } else {
      history.push('/');
    }
    // return <Redirect to='/signup'  />

    // =================TRIAL

    console.log(fnameRef.current.value);
    console.log(lnameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    function handleAddItem(newUser) {
      // setItems([...items, newItem]);
      setfname([fnameRef.current.value]);
      setlname(lnameRef.current.value);
      setEmail(emailRef.current.value);
      setPass(passwordRef.current.value);
      setCpass(cpasswordRef.current.value);
    }

    fetch(`${baseApiUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: fname,
        last_name: lname,
        email: email,
        password: pass,
        confirm_password: cpass,
      }),
    })
      .then((r) => r.json())
      .then((newUser) => handleAddItem(newUser));

    // =================TRIAL
  }

  return (
    <div className='sign'>
      <div className='signup-body'>
        <h2 className='signup'>ENROLL</h2>
        <form onSubmit={enrollUser}>
          <div class='mb-3' className='input-fields'>
            <input
              type='text'
              class='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='First Name'
              ref={fnameRef}
            />
            <input
              type='text'
              class='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Last Name'
              ref={lnameRef}
            />
            <input
              type='email'
              class='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Email'
              ref={emailRef}
            />
          </div>
          <div class='mb-3'>
            <input
              type='password'
              class='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
              minLength={8}
              ref={passwordRef}
            />
          </div>
          <div class='mb-3'>
            <input
              type='password'
              class='form-control'
              id='exampleInputPassword1'
              placeholder='Confirm Password'
              minLength={8}
              ref={cpasswordRef}
            />
          </div>
          <div class='mb-3 form-check'>
            <input
              type='checkbox'
              class='form-check-input'
              id='exampleCheck1'
            />
            <label class='form-check-label' for='exampleCheck1'>
              I agree to{' '}
              <span id='terms'> terms of service and privacy policy </span>{' '}
            </label>
          </div>
          <Link to="/login">
            <button
              type='submit'
              class='btn btn-primary'
              className='create-account'
            >
              Enroll as a new student
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Enroll;
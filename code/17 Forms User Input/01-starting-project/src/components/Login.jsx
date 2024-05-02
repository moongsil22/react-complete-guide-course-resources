import {useRef, useState} from 'react';
import Input from './Input.jsx';
export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  
  const email = useRef();
  const password = useRef();
  
  function handleSubmit(event){
    event.preventDefault();
    console.log('invalid 1...');
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes('@');
    console.log('invalid0...');
    if(!emailIsValid){
      console.log('invalid 2...');
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);

    console.log('Sending Http request ...');

    //Reset (권장되지않음)
    //email.current.value = '';

    //event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please Enter a valid Email.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

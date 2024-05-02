import Input from "./Input.jsx";
import {isEmail, isNotEmpty, hasMinLength} from '../util/validation.js'
import { useInput } from "../hooks/useInput.js";

export default function Login() {

  const {
    value: emailValue, 
    handleInputChange: handleEmailChange, 
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue, 
    handleInputChange: handlePasswordChange, 
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', (value) => hasMinLength(value,6));


  function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit start");


    //여기서 유효성 검사 통과했는지 다시 확인해줘야함.
    if(emailHasError || passwordHasError ){
      console.log('invalid 2...');
      return;
    }

    console.log(emailValue, passwordValue);

    //Reset
    //setEnteredValues({ email: '', password: '' });
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>
      <div className="control-row">
        <Input label="Email" id="email" type="email" name ="email"
              onBlur={handleEmailBlur}
              onChange={handleEmailChange} 
              value={emailValue}
              error={emailHasError && 'Please enter a valid email'}  
        />
        <Input label="Password" id="password" type="password" name ="password"
              onBlur={handlePasswordBlur}
              onChange={handlePasswordChange} 
              value={passwordValue}  
              error={passwordHasError && 'Please enter a valid password'}  
        />      
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

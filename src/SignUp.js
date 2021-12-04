import React from 'react';
import { useNavigate } from 'react-router';
import ReCaptcha from './ReCaptcha';
import './App.scss'
const pStyle={
  textAlign:'right',
  fontSize:'12px',
  color:'#9b9b9b',
}
const Field = React.forwardRef(({label, type,id, classes}, ref) => {
  let idf= id || 'form__field-'+label;
  let classesf= 'form__field '+ (classes || label); 
    return (
      <div className="form__group field">
      <input name={label} ref={ref} type={type} className={classesf} id={idf} placeholder={label}/>
      <label htmlFor={label} className="form__label">{label}:</label>
    </div>
    );
});

function onChange(value) {
  console.log('Captcha value:', value);
}

const Form = ({ onSubmit }) => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const recaptchaRef = React.useRef(); 
  //const confirmpasswordRef = React.useRef();
  const emailRef = React.useRef();
  const vehicleNumberRef = React.useRef();
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      email:emailRef.current.value,
      recaptcha:recaptchaRef.current.value,
      vehicleNumber:vehicleNumberRef.current.value
    };
    onSubmit(data);
  };
  return (
    <form className='auth-form' onSubmit={handleSubmit} >
      <Field ref={usernameRef} label="Username" type="text" />
      <p style ={pStyle} id="err-user" className="err"></p>
      <Field ref={emailRef} label="Email" type="email" />
      <p style ={pStyle} id="err-email" className="err"></p>
      <Field ref={passwordRef} label="Password" type="password" />
      <p style ={pStyle} id="err-pass" className="err"></p>
      {/*<Field ref={confirmpasswordRef} label="ConfirmPass" type="password" />
      <p style ={pStyle} id="err-check" className="err"></p>*/}
      <Field ref={vehicleNumberRef} label="Vehicle Number" type="text" />
      <p style ={pStyle} id="err-vehicle" className="err"></p>
      {ReCaptcha(recaptchaRef,onChange)}
      <div className='auth-btn-wrapper'>
          <button className='btn btn-pushable auth-btn' type="submit" ><span className='btn-front'>Sign Up!</span></button>
        </div>
    </form>
  );
};


const SignUp = () => {
  const navigate=useNavigate();
  const handleSubmit = data => {
    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    let chngRed = Array.from(document.getElementsByClassName('form__field'));
    chngRed.forEach((data1) => { if (data1.value === '') data1.style.borderBottom = '2px solid red'; else data1.style.borderBottom = '2px solid #9b9b9b' })
    var p = data.password,
      errors = false;
    if (data.email === '') {
      document.getElementById('err-email').innerHTML = "Email empty";
      errors = true;
    }
    else {
      if (!validateEmail(data.email)) {
        document.getElementById('err-email').innerHTML = "Email invalid";
        errors = true;
      }
      else {
        document.getElementById('err-email').innerHTML = "";
        errors = false;
      }
    }
    if (data.username === '') {
      document.getElementById('err-user').innerHTML = "Username empty";
      errors = true;
    }
    else {
      //check validity
      //if(!valid){
      //errors.push("Choose another username.")
    }
    if (p.length < 8) {
      document.getElementById('err-pass').innerHTML = "Your password must be at least 8 characters";
      errors = true;
    }
    if (p.search(/[a-z]/i) < 0) {
      document.getElementById('err-pass').innerHTML = "Your password must contain at least one letter.";
      errors = true;
    }
    if (p.search(/[0-9]/) < 0) {
      document.getElementById('err-pass').innerHTML = "Your password must contain at least one digit.";
      errors = true;
    }
    // if (p !== data.checkpassword) {
    //   document.getElementById('err-check').innerHTML = "Your passwords dont match";
    //   errors = true;
    // }
    if(!data.vehicleNumber){
      document.getElementById('err-vehicle').innerHTML = "This Field is Mandatory.";
    }
    if (errors !== true) {
      //to database
      navigate('/SignIn');
    }
  }
return (
  <div className='wrapper'>
    <Form onSubmit={handleSubmit} />
  </div>
);
};
export default SignUp;

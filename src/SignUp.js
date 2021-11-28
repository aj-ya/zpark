import React from 'react';
import { useNavigate } from 'react-router';
const appStyle = {
  display: 'flex'
};

const formStyle = {
  margin: 'auto',
  padding: '10px',
  border: '1px solid #c9c9c9',
  borderRadius: '5px',
  background: '#f5f5f5',
  width: '300px',
  display: 'block'
};

const labelStyle = {
  margin: '10px 0 0 0',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '15px',
};

const inputStyle = {
  margin: '5px 0 0 0',
  padding: '5px',
  border: '1px solid #bfbfbf',
  borderRadius: '3px',
  boxSizing: 'border-box',
  width: '100%'
};

const submitStyle = {
  margin: '15px 0 10px 0',
  padding: '3px 5px',
  border: '1px solid #efffff',
  borderRadius: '10px',
  background: 'yellow',
  width: '100%',
  height: '50px',
  fontSize: '26px',
  color: '#121212',
  display: 'block',
};
const pStyle={
  'textAlign':'right',
  'fontSize':'14px',
}
const Field = React.forwardRef(({ label, type }, ref) => {
  return (
    <div>
      <label style={labelStyle} >{label}</label>
      <input ref={ref} type={type} style={inputStyle} className="auth-input" />
    </div>
  );
});

const Form = ({ onSubmit }) => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const confirmpasswordRef = React.useRef();
  const emailRef = React.useRef();
  const vehicleNumberRef = React.useRef();
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      email:emailRef.current.value,
      checkpassword:confirmpasswordRef.current.value,
      vehicleNumber:vehicleNumberRef.current.value
    };
    onSubmit(data);
  };
  return (
    <form style={formStyle} onSubmit={handleSubmit} >
      <Field ref={usernameRef} label="Choose a username:" type="text" />
      <p style ={pStyle} id="err-user" className="err"></p>
      <Field ref={emailRef} label="Email" type="email" />
      <p style ={pStyle} id="err-email" className="err"></p>
      <Field ref={passwordRef} label="Choose a password:" type="password" />
      <p style ={pStyle} id="err-pass" className="err"></p>
      <Field ref={confirmpasswordRef} label="Retype the password:" type="password" />
      <p style ={pStyle} id="err-check" className="err"></p>
      <Field ref={vehicleNumberRef} label="Vehicle Number:" type="text" />
      <p style ={pStyle} id="err-vehicle" className="err"></p>
      <div>
        <button style={submitStyle} type="submit">Submit</button>
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
    let chngRed = Array.from(document.getElementsByClassName('auth-input'));
    chngRed.forEach((data1) => { if (data1.value === '') data1.style.border = '2px solid red'; else data1.style.border = '1px solid #bfbfbf' })
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
    if (data.vehicleNumberRef)
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
    if (p !== data.checkpassword) {
      document.getElementById('err-check').innerHTML = "Your passwords dont match";
      errors = true;
    }
    if(!data.vehicleNumber){
      document.getElementById('err-vehicle').innerHTML = "This Field is Mandatory.";
    }
    if (errors !== true) {
      //to database
      navigate('/SignIn');
    }
  }
return (
  <div style={appStyle}>
    <Form onSubmit={handleSubmit} />
  </div>
);
};
export default SignUp;

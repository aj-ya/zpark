import React from 'react';
import './signin.scss'
function Captcha(){
  var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var i;
  for (i=0;i<6;i++){
    var a = alpha[Math.floor(Math.random() * alpha.length)];
    var b = alpha[Math.floor(Math.random() * alpha.length)];
    var c = alpha[Math.floor(Math.random() * alpha.length)];
    var d = alpha[Math.floor(Math.random() * alpha.length)];
    var e = alpha[Math.floor(Math.random() * alpha.length)];
    var f = alpha[Math.floor(Math.random() * alpha.length)];
    var g = alpha[Math.floor(Math.random() * alpha.length)];
   }
 var code = a.concat(' ' , b ,' ', c ,' ' ,d, ' ' ,e ,' ', f ,' ' ,g);
 document.getElementById("mainCaptcha").value = code;
}
function removeSpaces(string){
 return string.split(' ').join('');
}

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
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
};

const submitStyle = {
    margin: '20px 0 20px 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '10px',
    background: 'yellow',
    width: '100%',
    height:'50px',
    fontSize: '26px',
    color: '#121212',
    display: 'block',
};

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    );
});

const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const captchaGenRef = React.useRef();
    const captchaEntRef = React.useRef(); 
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            captchaGen: captchaGenRef.current.value,
            captchaEnt: captchaEntRef.current.value,
        };
        onSubmit(data);
    };
    return (
      <form style={formStyle} onSubmit={handleSubmit} >
        <Field ref={usernameRef} label="Username:" type="text" />
        <Field ref={passwordRef} label="Password:" type="password" />
        <label style={labelStyle}>Captcha:</label>
        <input ref={captchaGenRef}style={{pointerEvents:'none',marginLeft:'10px'}} type="text" id="mainCaptcha" />
        <input style={{marginRight:'auto '}}type="button" id="refresh" value="Refresh" onclick={()=>{Captcha()}} />
        <input ref={captchaEntRef}style={inputStyle} type="text" id="txtInput"/>
        <span id="auth-rej"></span>
        <div>
          <button style={submitStyle} type="submit" >Submit</button>
        </div>
      </form>
    );
};

const SignInFunc = () => {
    const handleSubmit = data => {
      console.log(data);
      if(removeSpaces(data.captchaEnt)===removeSpaces(data.captchaGen)){
        if(data.username==='ajeya'){
          if(data.password==='ajeya'){
            window.localStorage.setItem('username',data.username);
            window.location.href="/Home";
          }
          else{
            document.getElementById("auth-rej").innerHTML="Incorrect Username/Password."
          }
        }
        else{
          document.getElementById("auth-rej").innerHTML="Incorrect Username/Password."
        }
      }
      else{
        document.getElementById("auth-rej").innerHTML="Captcha Incoorect."
      }
    }
        //if correct
    return (
      <div style={appStyle}>
        <Form onSubmit={handleSubmit} />
      </div>
    );
};
export default class SignIn extends React.Component{
  componentDidMount(){
    Captcha();
    document.getElementById('refresh').addEventListener('click',()=>{Captcha();});
    //document.getElementById('refresh').setAttribute('onClick','Captcha()');
  }
  render(){
    return (
      <SignInFunc/>
    )
  }
}
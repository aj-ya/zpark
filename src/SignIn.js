import React from 'react';
import './signin2.scss';
import ReCaptcha from './ReCaptcha';
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
const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const recaptchaRef = React.useRef(); 
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            recaptcha: recaptchaRef.current.value,
        };
        onSubmit(data);
    };
    //instead of alpabet captcha can use math?
    return (
      <form className='auth-form' onSubmit={handleSubmit} >
        <Field ref={usernameRef} label="Username" type="text" />
        <Field ref={passwordRef} label="Password" type="password" />
        {ReCaptcha(recaptchaRef,onChange)}
        {/*<div id="captcha-wrapper">
        <input ref={captchaGenRef} type="text" id="mainCaptcha" className='input' readOnly/>
        <button id="refresh" value="Refresh">&#8635;</button></div>
        <div className="form__group field captcha">
      <input name='captcha' ref={captchaEntRef} type='text' className='form__field captcha' id='form__field-Captcha' placeholder='Captcha' />
      <label htmlFor='captcha' className="form__label">Captcha:</label></div>
        <span id="auth-rej"></span>*/}
        <div className='auth-btn-wrapper'>
          <button className='btn btn-pushable auth-btn' type="submit"><span className='btn-front'>Sign In!</span></button>
        </div>
      </form>
    );
};

const SignInFunc = () => {
    const handleSubmit = data => {
      console.log(data);
      let id_prefix='form__field-'
      let errFlags={
        Password:false,
        Username:false,
        //Captcha:false,
      }
      //errFlags.Captcha=removeSpaces(data.captchaEnt)===removeSpaces(data.captchaGen)?false:true;
      errFlags.Username=(data.username==='ajeya')?false:true;
      errFlags.Password=(data.password==='ajeya')?false:true;
      let count=0;
      for (let [key, value] of Object.entries(errFlags)) {
        if(value===true){
          count++;
          console.log(id_prefix+key)
          document.getElementById(id_prefix+key).style.borderBottom='2px solid red';
        }
        else{
          document.getElementById(id_prefix+key).style.borderBottom='2px solid #9b9b9b';
        }
      }
      if(count===0)
      {
        window.localStorage.setItem('username',data.username);
        window.location.href="/Home";
      }    
}
        //if correct
    return (
      <div className='wrapper'>
        <Form onSubmit={handleSubmit} />
      </div>
    );
};
export default class SignIn extends React.Component{
  componentDidMount(){
    //Captcha();
    //document.getElementById('refresh').addEventListener('click',(e)=>{e.preventDefault();Captcha();});
    //document.getElementById('refresh').setAttribute('onClick','Captcha()');
  }
  render(){
    return (
      <SignInFunc/>
    )
  }
}
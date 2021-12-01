import ReCaptchaV2 from 'react-google-recaptcha'
import './recaptcha.scss'
const SITEKEY='6LfgTG8dAAAAAJA8Sz5q8c7Ppf242Oz7XQ0gA7s8';
function ReCaptcha(recaptchaRef,onChangeFunction,theme='dark') {

        return (<div className='captcha-wrapper'><div id="g-recaptcha">
            <ReCaptchaV2 sitekey={SITEKEY} ref={recaptchaRef} onChange={onChangeFunction} theme={theme} /></div>
        </div>)
    }
export default ReCaptcha;
import { Link } from "react-router-dom";
import './mainmenu.scss'
const buttonStyle={
    'textDecoration':'none',
}
function  MainMenu() {
        return(<div class='container'>
            <Link style={buttonStyle} to="/SignIn"><button id="signin">Sign In!</button></Link>
            <Link style={buttonStyle}to="/SignUp"><button id="signup">Sign Up!</button></Link>
            <Link style={buttonStyle}to="/RFID"><button id="rfid">RFID</button></Link>            
            </div>
        );
}
export default MainMenu;
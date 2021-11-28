import React from "react";
import { useLocation,Link} from 'react-router-dom'

let contStyle={
    'display':'inline-flex',
    'flexDirection':'column',
    'justifyContent':'center',
    'alignItems':'center',
}
let modelStyle={
    'color':'yellow',
    'textAlign':'center',
}
let chargingbtnStyle={
    'height':'80px',
}
let imgStyle={
    'width':'300px',
    'height':'300px',
}
function VehicleCard(){
        const location = useLocation();
        const vehicle = location.state?location.state.vehicle:{Name:'Dummmy',Charge:20,charging:false};
        return(
            <div style={contStyle}>
                <h1 style={modelStyle}>{vehicle.Name}</h1>
                {/**/}
                <div style={imgStyle}><img src=" " alt={vehicle.Name}></img></div>
                <div style={{'color':'white',}}>Operational Score: {vehicle.Charge}%</div>
                <button style={chargingbtnStyle}onClick={()=>{
                    //!charging and update in db
                }}>{vehicle.charging?'Already':'Start'} Charging</button>
            </div>
        )
    }

export default class VehicleState extends React.Component{
    render(){
        return(<div>
            <Link to='/'><button style={{width:'100px',fontSize:'20px',padding:'0',height:'30px',borderRadius:'10px',top:'20px',right:'20px',position:'absolute'}} onClick={()=>{window.localStorage.removeItem('username')}}>Logout</button></Link>
            <VehicleCard /></div>
        );
    }
};
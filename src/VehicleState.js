import React from "react";
import { useLocation} from 'react-router-dom'
import LogoutBtn from "./LogoutBtn";
import { useState } from 'react';
const images = require.context('../public/backgrounds', true);
var vehicleG;
function ReturnVehicle(){
    const location = useLocation();
    const vehicle = location.state?location.state.vehicle:{Name:'Dummmy',Charge:20,charging:false};
    return vehicle;
}
function VehicleCard(){

        const [buttonText, setButtonText] = useState("Check Status");
        const [vehicleObj, setVehicleObj] = useState(ReturnVehicle());
        vehicleG=vehicleObj;
        return(
            <div className='wrapper'>
                <h1>{vehicleObj.Name}</h1>
                {/*
                <div style={imgStyle}><img src=" " alt={vehicle.Name}></img></div>*/}
                <div>Operational Score: {vehicleObj.Charge}%</div>
                <button className='btn btn-pushable btn-charging' onClick={()=>{
                    //!charging and update in db
                    vehicleObj.charging=!vehicleObj.charging;
                    let charging=vehicleObj.charging;
                    setVehicleObj(vehicleObj);
                    charging
                    ? setButtonText("Stop Charging")
                    : setButtonText("Start Charging");
                }}><span className='btn-front' id='btn-charging'>{buttonText}</span></button>
            </div>
        )
    }

export default class VehicleState extends React.Component{
    componentDidMount(){
        //if not dummy.add case case for dummy.
        console.log(`./${vehicleG.Name.split(' ').join('')}.avif`)
        let vehicleImg=images(`./${vehicleG.Name.split(' ').join('')}.avif`).default;
        console.log(vehicleImg);
        document.getElementsByClassName('wrapper')[0].style.background=`url(${vehicleImg}) no-repeat 100%`;
    }
    render(){
        return(<div className='wrapper'>
            <LogoutBtn />
            <VehicleCard /></div>
        );
    }
};
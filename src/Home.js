import react from "react";
import { Link } from "react-router-dom";
const buttonStyles={
    'background':'yellow',
    'width':'80%',
    'height':'10%',
    'margin':'20px auto 20px auto',
}

var cars = [{ Name: 'Tesla Model S', Charge: 20, Charging: true }, { Name: 'Tesla Model 3', Charge: 20 ,Charging: true}, { Name: 'Tesla Model X', Charge: 20,Charging: true }, { Name: 'Tesla Model Y', Charge: 20,Charging: true }];
function VehicleTile(vehicle) {
    return (
        <Link
to='/VehicleState'
state={{vehicle:vehicle}} key={vehicle.Name}
style={{'textDecoration':'none'}}
>
<button style={buttonStyles}>{vehicle.Name}</button>
</Link>
    );
}

function AllVehicles(vehicles) {
    return vehicles.map((vehicle) => { return (VehicleTile(vehicle)) })
}
export default class Home extends react.Component {

    constructor(props) {
        super(props);
        this.vehicles = [];
        this.state = { vehicle: null};
    }
    componentWillMount() {
        this.vehicles = cars;
    }
    render() {
        return (<div><Link to='/'><button style={{width:'100px',fontSize:'20px',padding:'0',height:'30px',borderRadius:'10px',top:'20px',right:'20px',position:'absolute'}} onClick={()=>{window.localStorage.removeItem('username')}}>Logout</button></Link><div style={{'diplay':'inline-flex','flexDirection':'column','width':'300px','justifyContent':'center','alignItems':'center'}}>{AllVehicles(this.vehicles)}</div></div>);
    }
}
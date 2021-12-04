import react from "react";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import Footer from "./Footer";
import './main.scss'

var cars = [{ Name: 'Tesla Model S', Charge: 20, Charging: true }, { Name: 'Tesla Model 3', Charge: 20 ,Charging: true}, { Name: 'Tesla Model X', Charge: 20,Charging: true }, { Name: 'Tesla Model Y', Charge: 20,Charging: true }];
function VehicleTile(vehicle) {
    return (
        <Link
to='/VehicleState'
state={{vehicle:vehicle}} key={vehicle.Name}
className='Link'
>
<button className='btn-pushable ind-vehicle'><span className='btn-front'>{vehicle.Name}</span></button>
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
        return (<div className='wrapper'>
            <LogoutBtn/>
            <div className='vehicle-box'>{AllVehicles(this.vehicles)}</div>
            <Footer/>
            </div>);
    }
}
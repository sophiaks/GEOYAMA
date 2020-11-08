import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import { Component } from 'react';


const long = Math.floor(JSON.parse(localStorage.getItem("longitude")));
const lat = Math.floor(JSON.parse(localStorage.getItem("latitude")));

const countryName = JSON.parse(localStorage.getItem("countryName"));
const district = JSON.parse(localStorage.getItem("district"));
const city = JSON.parse(localStorage.getItem("city"));

class CustomMap extends Component{
    constructor(props) {
        super(props);
        this.state = {
          }
        }

    mapP = (
        <Map center={[lat, long]} zoom={7} width={900} height={750}>
        <Marker anchor={[lat, long]} payload={1} onClick={({ event, anchor, payload }) => {
            alert("Selected IP is in " + countryName + ", " + city + ", " + district)
        }} />
        </Map>
    )

    render() {
        console.log(localStorage.getItem("longitude"))
        return(
            <div className="map">
            <h1>Caso a página não tenha carregado automaticamente, dê refresh para ver o mapa</h1>
            {this.mapP}
            </div>
        )
    }
}


export default CustomMap;
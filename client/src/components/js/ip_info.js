import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import { Component } from 'react';


const long = Math.floor(JSON.parse(localStorage.getItem("longitude")));
const lat = Math.floor(JSON.parse(localStorage.getItem("latitude")));

const countryName = JSON.parse(localStorage.getItem("countryName"));
const district = JSON.parse(localStorage.getItem("district"));
const city = JSON.parse(localStorage.getItem("city"));

// function mapTilerProvider (x, y, z, dpr) {
//     return 'https://api.maptiler.com/maps/hybrid/?key=zMXNO9jnIv8SBOj0ft4e#0.0/0.00000/0.00000'
//   }

class CustomMap extends Component{
    constructor(props) {
        super(props);
        this.state = {
          }
        }

    mapP = (
        <Map center={[lat, long]} 
        zoom={7} 
        width={900} 
        height={750}
        
        >
        <Marker anchor={[lat, long]} payload={1} onClick={({ event, anchor, payload }) => {
            alert("IP está em " + countryName + ", " + city + ", " + district)
        }} />
        </Map>
    )

    reload() {
        window.location.reload();
    }

    render() {
        console.log(localStorage.getItem("longitude"))
        return(
            <div className="map">
            <h1>Caso a página não tenha carregado automaticamente, clique aqui</h1>
            <button onClick={this.reload} className='btn-log'>RECARREGAR</button>
            {this.mapP}
            </div>
        )
    }
}


export default CustomMap;
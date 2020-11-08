import '../css/App.css';
import React from 'react';
// import { useHistory } from 'react-router-dom';

var IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');
var GeolocationParams = require('ip-geolocation-api-javascript-sdk/GeolocationParams.js');
var ipgeolocationApi = new IPGeolocationAPI("b343f4e1cd5840bfa4d003e474561704", false); 
var geolocationParams = new GeolocationParams();
geolocationParams.setLang('en');


export default class Ip extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
          ip: '',
          local: ''
        }
        
        this.findMyIP = this.findMyIP.bind(this);
        this.findOtherIP = this.findOtherIP.bind(this);
        this.onChangeIp = this.onChangeIp.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
        this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
      }

    saveToLocalStorage(name, json) {
        localStorage.setItem(name, JSON.stringify(json));
        const info = JSON.parse(localStorage.getItem(name));
        console.log(info)
    }
    
    
    handleResponse(json, props) {
        console.log(json);
        this.saveToLocalStorage("info", json)
        this.saveToLocalStorage("ip", json.ip)
        this.saveToLocalStorage("countryName", json.country_name)
        this.saveToLocalStorage("district", json.district)
        this.saveToLocalStorage("city", json.city)
        this.saveToLocalStorage("latitude", json.latitude)
        this.saveToLocalStorage("longitude", json.longitude)
        this.props.history.push('/map')
    }

    async findMyIP() {
    geolocationParams.setIPAddress();
    console.log("IP: " + this.state.ip);
    await ipgeolocationApi.getGeolocation(this.handleResponse, geolocationParams);
    this.setState({
        local: true
    })
    
    }

    async findOtherIP() {
        await geolocationParams.setIPAddress(this.state.ip);
        console.log("IP DO INPUT " + this.state.ip);
        ipgeolocationApi.getGeolocation(this.handleResponse, geolocationParams);
        
    }

    onChangeIp(e) {
        this.setState({ip: e.target.value})
        console.log(this.state.ip);
      }
    

  render() {
      
    return (
        <body className='body'>
          <div className="ip-container">
          <h3>Insira o IP</h3>
          <div className="rowIp">
          <input type="text"
            className="form"
            placeholder='IP'
            name='username'
            onChange={this.onChangeIp}/>
            <br />
            <input type="button" value="       ou        Usar o IP deste computador" className="btn-c" onClick={this.findMyIP}/>
            </div>
            <input type="submit" value="OK" className="btn-log" onClick={this.findOtherIP}/>
          </div>
        </body>
    );
  }
}
import '../css/App.css'
const { Component } = require("react");
var hist = JSON.parse(localStorage.getItem("loggedUserHistory"));


class Historico extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loggedUser: hist['loggedUser'],
      dict: hist['dict']
    }
  }

  render() {
    return (
          <div className="login-container">
            <h1>Histórico de IPs de {this.state.loggedUser}</h1>
            <ul>
                {this.state.dict}
            </ul>
          </div>
        
    );
  }
}

export default Historico;
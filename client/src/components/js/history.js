var hist = JSON.parse(localStorage.getItem("loggedUserHistory"));
import '../css/App.css'
const { Component } = require("react");


class History extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loggedUser: hist['loggedUser'],
      dict: hist['dict']
    }
  }

  alert = () => {
    alert("Ooi")
  }

  render() {
    return (
          <div className="login-container">
            <h1>Histórico de IPs de {this.state.loggedUser}</h1>
            <ul>
                {dict}
            </ul>
          </div>
        
    );
  }
}

export default History;
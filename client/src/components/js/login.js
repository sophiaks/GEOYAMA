import '../css/App.css'
const { Component } = require("react");
const axios = require('axios') ;

class Login extends Component{
  constructor(props) {
    super(props);
    
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.doLogin = this.doLogin.bind(this);
    this.alert = this.alert.bind(this);
    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeUser(input) {
    this.setState({
      username: input.target.value
    })
  }

  onChangePassword(input) {
    this.setState({
      password: input.target.value
    })
  }

  doLogin(e) {
    e.preventDefault();
    const userObject = {
      username: this.state.username,
      password: this.state.password
    }
    axios.post('/api/login', userObject, {
      header: {
          "Content-Type": 'application/json'
      }
    }).then(res => {
      console.log(res.status)
      if (Math.floor(res.status/100) === 2) {
        alert("Login feito com sucesso!");

        localStorage.setItem("loggedIn", true);
        
        var dict = {
          'loggedUser': this.state.username,
          'list': []
        }
        localStorage.setItem("loggedUserHistory", JSON.stringify(dict));
        this.props.history.push('/');
        window.location.reload();

        this.setState({
          username: '',
          password: ''
        })
      }
      
    }).catch(function(error){
      if(error.response.status === 401) {
        console.log("Auth error");
        alert("Erro de autenticação");
      }
      if(error.response.status === 404) {
        console.log("User not found");
        alert("Usuário não encontrado!");
      }
    }); 
  }


  render() {
    return (
        
          <div className="login-container">
            <h1>Login</h1>
            <input type="text"
            className="form"
            placeholder='Nome de Usuário'
            value={this.state.username}
            onChange={this.onChangeUser}
            />
            <input type="text"
            className="form"
            placeholder='Senha'
            value={this.state.password}
            onChange={this.onChangePassword}
            />
            <input type='submit' 
            value="Fazer Login" 
            className="btn-log"
            onClick={this.doLogin}
            />
            <input className="btn-c" 
            type="button" 
            value="Fazer Cadastro"
            />
          </div>
        
    );
  }
}

export default Login;
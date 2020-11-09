import React, { Component } from 'react'
import axios from 'axios';
import '../css/App.css'

class Cadastro extends Component{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
          }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.register = this.register.bind(this);
        this.redirectToLogin = this.redirectToLogin.bind(this);
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value});
      }
    
      onChangePassword(e) {
        this.setState({password: e.target.value});
      }
    
      register(e) {
        e.preventDefault();
        const userObject = {
          username: this.state.username,
          password: this.state.password
        }
        console.log(userObject)
        axios.post('/api/cadastro', userObject , {
          header: {
              "Content-Type": 'application/json'
          }
      }).then(res => {
        console.log(res.status)
        if (Math.floor(res.status/100) === 2) {
          console.log(res.message)
          alert("Usuário cadastrado com sucesso!")
          this.props.history.push('/home')
          localStorage.setItem("loggedIn", true);
        }
        if (res.status === 403) {
          alert("Usuário já existe! Tente novamente.")
          localStorage.setItem("loggedIn", false);
        }
      }).catch(function(error){
        console.log(error)
        if(error.response.status === 403) {
          alert("Usuário já cadastrado!")        
        }
        else{alert(error);} 
          
      });      
    }

    redirectToLogin(props) {
      this.props.history.push('/login')
    }


    render() {
        return(
        <div className='cadastro-container'>
        <h1>Cadastro</h1>
              <input required type="text"
                className="form"
                placeholder='Login'
                name='username'
                onChange={this.onChangeUsername}
              />
              <input required type="text"
                className="form"
                placeholder='Senha'
                name='password'
                onChange={this.onChangePassword}
              />
            <input type="submit" 
            className="btn-log"
            value="Fazer Cadastro"
            onClick={this.register}/>

            <input type='submit'
            className='btn-c'
            value="Já tem cadastro? Fazer login"
            onClick={this.redirectToLogin}
            />
    </div>
    )
    }
}

export default Cadastro;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/js/nav';
import Home from './components/js/home'
import Cadastro from './components/js/cadastro'
import Login from './components/js/login'
import Ip from './components/js/ip'
import Map from './components/js/ip_info'
import Historico from './components/js/historico'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/cadastro" component={Cadastro}/>
          <Route exact path="/" component={Login}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/ip" component={Ip}/>
          <Route exact path="/map" component={Map}/>
          <Route exact path="/historico" component={Historico}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

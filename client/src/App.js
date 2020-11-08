import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/js/nav';
import Home from './components/js/home'
import Cadastro from './components/js/cadastro'
import Login from './components/js/login'
import Ip from './components/js/ip'
import Map from './components/js/ip_info'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cadastro" component={Cadastro}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/ip" component={Ip}/>
          <Route exact path="/map" component={Map}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

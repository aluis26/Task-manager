import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
 
  passInputEmail(e) {
    this.setState({
      inputEmail: e.target.value
    })
  }  

  passInputPassword(e){
    this.setState({
      inputPassword: e.target.value
    })
  }

  componentDidMount() {
    this.fetchApi()
  }

  fetchApi = async () => {
    const response = await fetch(`/api`)
    const results = await response.json()
    this.setState({ results })
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
    <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
        

        
      </div>
    )
  }
}

export default App

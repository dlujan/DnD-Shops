import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import jwtDecode from 'jwt-decode';
import AuthRoute from './util/AuthRoute';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

// Components
import General from './components/shops/General';
import Blacksmith from './components/shops/Blacksmith';
import Leatherworker from './components/shops/Leatherworker';
import Fletcher from './components/shops/Fletcher';
import Tailor from './components/shops/Tailor';
import Tavern from './components/shops/Tavern';
import Arcane from './components/shops/Arcane';
import Potions from './components/shops/Potions';
import Temple from './components/shops/Temple';
import Jeweler from './components/shops/Jeweler';
import Animals from './components/shops/Animals';
import Custom from './components/Custom';

import './App.css';
import axios from 'axios';

const token = localStorage.FBIdToken;
if(token) {
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    store.dispatch(logoutUser())
    // window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      shops: [],
      isLoggedIn: false
    };
  }

  async componentDidMount () {
    const url = 'https://us-central1-dnd-shops.cloudfunctions.net/api/shops';
    const response = await fetch(url);
    const data = await response.json();
    
    this.setState({
      isLoaded: true,
      shops: data
    });
    
    console.log(this.state.shops);
  }
  // Create method for when user logs in, their custom items get loaded into state
  
  render() {
    const {isLoaded} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
        return (
          <Provider store={store}>
          <HashRouter>
                <div>
                  <Navbar/>
                </div>
                <div>
                <Switch>
                  <Route exact path="/login" render={(props) => <Login {...props}shops={this.state.shops}/>} />
                </Switch>
                <Switch>
                  <Route exact path="/signup" render={(props) => <Signup {...props}shops={this.state.shops}/>} />
                </Switch>
                <Switch>
                  <Route exact path="/" render={(props) => <General {...props}shops={this.state.shops}/>} />
                </Switch>
                <Switch>
                  <Route exact path="/blacksmith" render={(props) => <Blacksmith {...props}shops={this.state.shops}/>} />
                </Switch>
                <Switch>
                  <Route exact path="/leatherworker" render={(props) => <Leatherworker {...props}shops={this.state.shops}/>} />
                </Switch>
                <Switch>
                  <Route exact path="/fletcher" render={(props) => <Fletcher {...props}shops={this.state.shops}/>} />
                </Switch>
                <Switch>
                  <Route exact path="/tailor" render={(props) => <Tailor {...props}shops={this.state.shops}/>} />
                </Switch>
                <Switch>
                  <Route exact path="/tavern" render={(props) => <Tavern {...props}shops={this.state.shops}/>} />
                </Switch>
                <Switch>
                  <Route exact path="/arcane" render={(props) => <Arcane {...props}shops={this.state.shops}/>} />
                </Switch>
                <Switch>
                  <Route exact path="/potions" render={(props) => <Potions {...props}shops={this.state.shops}/>} />
                </Switch>
                <Switch>
                  <Route exact path="/temple" render={(props) => <Temple {...props}shops={this.state.shops}/>} />
                </Switch>
                <Switch>
                  <Route exact path="/jeweler" render={(props) => <Jeweler {...props}shops={this.state.shops}/>} />
                </Switch>
                <Switch>
                  <Route exact path="/animals" render={(props) => <Animals {...props}shops={this.state.shops}/>} />
                </Switch>
                <Switch>
                  <Route exact path="/custom" render={(props) => <Custom {...props}shops={this.state.shops}/>} />
                </Switch>
                </div>
            </HashRouter>
            </Provider>
        );
      }
  }
}

export default App;

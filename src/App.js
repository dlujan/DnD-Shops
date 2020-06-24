import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

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

import gif from './assets/loading.gif';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopsLoaded: false,
      shops: [],
      customItems: []
    };
  }

  async componentDidMount () {
    store.dispatch(loadUser());
    
    const url = 'https://us-central1-dnd-shops.cloudfunctions.net/api/shops';
    const response = await fetch(url);
    const data = await response.json();
    
    this.setState({
      shopsLoaded: true,
      shops: data,
      customItems: this.props.customItems
    });
    
    // console.log(this.state.shops);
  }
  // Create method for when user logs in, their custom items get loaded into state
  
  render() {
    const {shopsLoaded} = this.state;
    
    if (!shopsLoaded) {
      return (
        <div className="loading">
          <img src={gif} alt="Loading..."/>
        </div>
      )
    } else {
        return (
          <Provider store={store}>
            <HashRouter>
                  <div>
                    <Navbar/>
                    <Searchbar shops={this.state.shops}/>
                  </div>
                  <section>
                    <Alert />
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
                      <Route exact path="/custom" render={(props) => <Custom {...props}/>} />
                    </Switch>
                  </section>
              </HashRouter>
            </Provider>
        );
      }
  }
}

export default App;
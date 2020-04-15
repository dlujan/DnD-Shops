import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      shops: []
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
  
  render() {
    const {isLoaded} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
        return (
          <HashRouter>
            <div>
              <h1>DnD Shops!</h1>
              <div>
                <Navbar />
              </div>
              <div>
              <Switch>
                <Route exact path="/general" render={(props) => <General {...props}shops={this.state.shops}/>} />
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
            </div>
          </HashRouter>
        );
      }
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import  Home from './Home';
import  MyRecipes  from './MyRecipes';
import CreateRecipe  from './CreateRecipe';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import EditRecipe from'./EditRecipe';




class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">     
      </div>
      
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/CreateRecipe" component={CreateRecipe} />
              <Route path="/MyRecipes" component={MyRecipes} />
              <Route component={NoMatch} />
              <Route path="/EditRecipe/:id" component={EditRecipe}/>
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
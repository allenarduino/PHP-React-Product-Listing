import React from 'react';
import Home from './pages/Home/Home';
import AddProduct from './pages/AddProduct/AddProduct';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add-product" component={AddProduct} />
      </Switch>
    </Router>
  );
};

export default App;

import React from 'react';
import Home from './pages/Home/Home';
import AddProduct from './pages/AddProduct/AddProduct';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addproduct" component={AddProduct} />
      </Switch>
    </Router>
  );
};

export default App;

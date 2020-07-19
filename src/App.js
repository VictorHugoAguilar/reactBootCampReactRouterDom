import React from 'react';
// Importamos los componentes del Core
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Importamos los componentes personalizados
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import AllContact from './Components/AllContact/AllContact';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/about" > 
            <About />
          </Route>
          <Route path="/contact/:id">
            <Contact />
          </Route>
          <Route path="/contact" >
            <AllContact />
          </Route>
          <Route path="/" >
            <Login />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

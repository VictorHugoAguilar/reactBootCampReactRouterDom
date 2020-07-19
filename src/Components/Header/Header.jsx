import React from 'react';
// Importamos los componentes del Core
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importamos componentes personalizados
import About from '../About/About';
const Header = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Header;
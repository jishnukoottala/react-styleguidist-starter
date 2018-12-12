import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


import HomePage from 'pages/HomePage';
import AboutPage from 'pages/About';
import ContactPage from 'pages/Contact';
import NotFoundPage from 'pages/NotFoundPage';
import ServicesPage from 'pages/Services';
import HelpPage from 'pages/HelpPage';


const AppRouter = () => (
    <BrowserRouter>
    <div>
    
    <Switch>
    <Route path="/" component={HomePage} exact={true} />
    <Route path="/profile/:id" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/help" component={HelpPage} />
    
    <Route path="/services" component={ServicesPage} />
    <Route component={NotFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>
    );
export default AppRouter;
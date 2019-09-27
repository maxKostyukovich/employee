import React from 'react';
import './App.css';
import './_reset.sass';
import { Router, Route, Switch } from "react-router-dom";
import history from './history'
import NotFound from "./pages/NotFound/NotFound";
import MainPage from './pages/MainPage/MainPage'
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from "./pages/SignupPage/SignupPage";
import renderMainPage from './components/HOC/renderMainPage/renderMainPage'
class App extends React.Component {

    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={renderMainPage(MainPage)} />
                    <Route path={'/login'} component={LoginPage}/>
                    <Route path={'/signup'} component={SignupPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        );
    }
}

export default App;

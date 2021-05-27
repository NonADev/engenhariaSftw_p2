import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: ""
        };
    }

    changeEnvironment(newEnvironment) {
        this.setState(newEnvironment);
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <BrowserRouter >
                <Switch>
                    <Route path={"/pix"} component={this.pix.bind(this)} />
                    <Route path={"/home"} component={this.home.bind(this)} />
                    <Route path={["/login", "/*"]}>
                        <Login changeEnvironment={this.changeEnvironment.bind(this)} environment={this.state} />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }

    home() {
        return <div><p>bem vindo a home {this.state.usuario || 'Guest'}</p></div>;
    }

    pix() {
        return <div><p>pix</p></div>;
    }
}
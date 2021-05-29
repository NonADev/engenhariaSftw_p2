import React from 'react';
import PageNotFound404 from './pages/errors/pageNotFound404';
import Home from './pages/home/home';
import Login from './pages/login/login';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            usuario: ""
        };
    }

    changeCurrentPage(page) {
        this.setState({
            currentPage: page
        });
    }

    changeUsuario(usuario) {
        this.setState({
            usuario: usuario
        });
    }

    render() {
        switch (this.state.currentPage) {
            case 0:
                return (
                    <Login  changeUsuario={this.changeUsuario.bind(this)}
                            changeCurrentPage={this.changeCurrentPage.bind(this)}
                            environment={this.state} />
                );
            case 1:
                return (
                    <Home environment={this.state} />
                )
            default:
                return (
                    <PageNotFound404 environment={this.state}/>
                );
        }
    }
}
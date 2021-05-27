import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router';
import '../assets/login.scss';
import '../assets/margins.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            localUsuario: ''
        };
    }

    render() {
        return (
            <div>
                <TextField label={"Usuario"} onChange={(e)=>this.changeLocalState('localUsuario', e)} value={this.state.localUsuario} required/>
                <br />
                <Button onClick={this.btnLoginHandler.bind(this)} className={"mt30"} variant="contained" color="primary">
                    Login
                </Button>
            </div>
        );
    }

    changeLocalState(campo, evento) {
        this.setState({
            [campo]: evento.target.value
        });
    }

    btnLoginHandler(e) {
        this.props.changeEnvironment({
            usuario: this.state.localUsuario
        });
        //this.nextPath('/home');
        this.props.history.push('/home');
    }
}

export default withRouter(Login);
import { Button, TextField, Tooltip } from '@material-ui/core';
import React from 'react';
import '../../assets/login.scss';
import '../../assets/margins.scss';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            localUsuario: ''
        };
    }

    render() {
        return (
            <div style={{textAlign: "center", marginTop: "40vh"}}>
                <Tooltip arrow placement={"right-end"} title={"Qualquer valor serve :)"}>
                    <TextField align={"center"} label={"Usuario"} onChange={(e)=>this.changeLocalState('localUsuario', e)} value={this.state.localUsuario} required/>
                </Tooltip>
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
        this.props.changeUsuario(this.state.localUsuario);
        this.props.changeCurrentPage(1);
    }
}
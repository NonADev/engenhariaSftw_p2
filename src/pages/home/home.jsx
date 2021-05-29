import { Divider, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import React from "react";
import RefreshIcon from '@material-ui/icons/Refresh';
import { SwapHoriz } from "@material-ui/icons";

export default class Home extends React.Component {
    render() {
        document.body.style.backgroundColor = "#f5f5f5";
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <List style={{backgroundColor: 'white', width: '40vw'}}>
                    <ListItem>
                        <ListItemText>Bem vindo {this.props.environment.usuario || 'Guest'}!</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>R$ {this.props.environment.saldo}</ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="comments">
                                <RefreshIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText>Transferir</ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="comments">
                                <SwapHoriz />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </div>
        )
    }
}
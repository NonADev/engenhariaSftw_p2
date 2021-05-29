import { Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, InputAdornment, List, ListItem, ListItemSecondaryAction, ListItemText, Paper, TextField } from "@material-ui/core";
import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAdicionarMusica: false,
            showAlterarMusica: false,

            localNomeMusica: '',
            localNomeAutor: '',
            localAnoLancamento: '',

            localEditarId: '',
            localEditarNomeMusica: '',
            localEditarNomeAutor: '',
            localEditarAnoLancamento: '',

            arrayMusicas: []
        }
        this.carregarMusicas();
    }

    carregarMusicas() {
        axios.get('http://localhost:8080/musicas').then((resp)=>{
            this.setState({
                arrayMusicas: resp.data
            })
        }).catch((err)=>{
            console.error(err);
        });
    }

    deleteMusica(id) {
        axios.delete(`http://localhost:8080/delete?id=${id}`).then((resp)=>{
            this.carregarMusicas();
        }).catch((err)=>{
            console.error(err);
        });
    }

    salvarMusica() {
        let body = {
            nomeMusica: this.state.localNomeMusica,
            nomeAutor: this.state.localNomeAutor,
            anoLancamento: this.state.localAnoLancamento
        }
        axios.post('http://localhost:8080/insert', body).then((resp)=>{
            console.log(resp);
            this.carregarMusicas();
        }).catch((err)=>{
            console.error(err);
        }).then(()=>{
            this.setState({
                showAdicionarMusica: false,
                localNomeMusica: '',
                localNomeAutor: '',
                localAnoLancamento: '',
            });
        });
    }

    carregarEditarMusica(id) {        
        axios.get(`http://localhost:8080/findbyid?id=${id}`).then((resp)=>{
            this.setState({
                showAlterarMusica: true,

                localEditarId: resp.data.id,
                localEditarNomeMusica: resp.data.nomeMusica,
                localEditarNomeAutor: resp.data.nomeAutor,
                localEditarAnoLancamento: resp.data.anoLancamento   
            })
        }).catch((err)=>{
            console.error(err);
        });
    }

    editarMusica() {        
        let body = {
            id: this.state.localEditarId,
            nomeMusica: this.state.localEditarNomeMusica,
            nomeAutor: this.state.localEditarNomeAutor,
            anoLancamento: this.state.localEditarAnoLancamento  
        }
        axios.post('http://localhost:8080/update', body).then((resp)=>{
            console.log(resp);
            this.carregarMusicas();
        }).catch((err)=>{
            console.error(err);
        }).then(()=>{
            this.setState({
                showAlterarMusica: false,

                localEditarId: '',
                localEditarNomeMusica: '',
                localEditarNomeAutor: '',
                localEditarAnoLancamento: '' 
            });
        });
    }

    render() {
        document.body.style.backgroundColor = "#f5f5f5";
        return (
            <div>                
                <Paper style={{display: 'flex', justifyContent: 'center', height: '55px'}}>
                    <TextField label="Procurar Música" InputProps={{endAdornment: (<InputAdornment><IconButton><SearchIcon /></IconButton></InputAdornment>)}}/>
                    <Button onClick={()=>this.setState({showAdicionarMusica: true})} style={{height: '40px', marginLeft: '14px',marginTop: '8px'}} variant="contained" color="primary"><AddIcon/></Button>
                </Paper>
                <br/>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <List style={{backgroundColor: 'white', width: '65vw'}}>
                        <Divider />
                        {this.state.arrayMusicas.map((item)=>this.formataMusicaLayout(item))}
                    </List>
                </div>

                {/*! DIALOGO SALVAR NOVA MUSICA */}
                <Dialog open={this.state.showAdicionarMusica}>
                    <DialogTitle id="form-dialog-title">Adicionar Música</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus margin="dense" type="text" onChange={(e)=>this.changeLocalState('localNomeMusica', e)} value={this.state.localNomeMusica} label="Nome da musica" fullWidth />
                        <TextField margin="dense" type="text" onChange={(e)=>this.changeLocalState('localNomeAutor', e)} value={this.state.localNomeAutor} label="Nome do autor" fullWidth />
                        <TextField margin="dense" type="number" onChange={(e)=>this.changeLocalState('localAnoLancamento', e, 4)} value={this.state.localAnoLancamento} label="Ano de Lançamento" fullWidth />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>this.setState({showAdicionarMusica: false})} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={this.salvarMusica.bind(this)} variant='contained' color="primary">
                            Salvar
                        </Button>
                    </DialogActions>
                </Dialog>

                {/*! DIALOGO EDITAR MUSICA */}
                <Dialog open={this.state.showAlterarMusica}>
                    <DialogTitle id="form-dialog-title">Adicionar Música</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus margin="dense" type="text" onChange={(e)=>this.changeLocalState('localEditarNomeMusica', e)} value={this.state.localEditarNomeMusica} label="Nome da musica" fullWidth />
                        <TextField margin="dense" type="text" onChange={(e)=>this.changeLocalState('localEditarNomeAutor', e)} value={this.state.localEditarNomeAutor} label="Nome do autor" fullWidth />
                        <TextField margin="dense" type="number" onChange={(e)=>this.changeLocalState('localEditarAnoLancamento', e, 4)} value={this.state.localEditarAnoLancamento} label="Ano de Lançamento" fullWidth />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>this.setState({showAlterarMusica: false})} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={this.editarMusica.bind(this)} variant='contained' color="primary">
                            Salvar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    changeLocalState(campo, evento, maxLenght = -1) {
        if(maxLenght !== -1 && this.state[campo].length >= maxLenght) 
            return;
        this.setState({
            [campo]: evento.target.value
        });
    }

    formataMusicaLayout(musica) {
        return (
            <div>
                <ListItem>
                    <ListItemText>
                        {musica.id}
                    </ListItemText>
                    <ListItemText>
                        {musica.nomeMusica}
                    </ListItemText>
                    <ListItemText>
                        {musica.nomeAutor}
                    </ListItemText>
                    <ListItemText>
                        {musica.anoLancamento}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <ButtonGroup disableElevation variant="contained" color="primary">
                            <Button onClick={()=>this.deleteMusica(musica.id)}><DeleteIcon /></Button>
                            <Button onClick={()=>this.carregarEditarMusica(musica.id)}><EditIcon /></Button>
                        </ButtonGroup>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
            </div>
        );
    }
}

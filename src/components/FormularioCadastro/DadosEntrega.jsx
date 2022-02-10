import { TextField, Button } from '@material-ui/core';
import React from 'react';
import { useState } from "react";


function DadosEntrega({Enviar}){
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    
    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            Enviar({cep, endereco, numero, estado, cidade})
            }}>
            <TextField 
                value={cep}
                onChange={(event) => {setCep(event.target.value)}}
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField 
                value={endereco}
                onChange={(event) => {setEndereco(event.target.value)}}
                id="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField 
                value={numero}
                onChange={(event) => {setNumero(event.target.value)}}
                id="numero"
                label="Número"
                type="number"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField 
                value={estado}
                onChange={(event) => {setEstado(event.target.value)}}id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField 
                value={cidade}
                onChange={(event) => {setCidade(event.target.value)}}
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                fullWidth
                >
                Cadastrar
            </Button>
        </form>
    )
}

export default DadosEntrega;
import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";

function DadosUsuario({Enviar}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
  return (
    <form onSubmit={(event)=>{
        event.preventDefault();
        Enviar({email, senha});
    }}>
      <TextField
        value={email}
        onChange={(event) => {setEmail(event.target.value)}}
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={senha}
        onChange={(event) => {setSenha(event.target.value)}}
        id="senha"
        label="senha"
        type="password"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({Enviar, validacoes}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState("true");
  const [novidades, setNovidades] = useState("false");
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}, nome:{valido:true, texto:""}});
  
  function validarCampos(event){
    const {name, value} = event.target  
    const novoEstado = {...erros}
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar(){
    for(let campo in erros){
      if(!erros[campo].valido){
        return false;
      }
    }
    return true;
  }
  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); //Impede carregamento de página no submit
        if(possoEnviar()){
          Enviar({nome, sobrenome, cpf, novidades, promocoes});
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          let tmpNome = event.target.value;
          if (tmpNome.length >= 15) {
            tmpNome = tmpNome.substring(0, 15);
          }
          setNome(tmpNome);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        required
        id="Nome"
        name="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="Sobrenome"
        name="sobrenome"
        required
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(event) =>{
          setCpf(event.target.value);
        }}
        
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
        required
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch 
          checked={promocoes}
          onChange={(event) =>{
            setPromocoes(event.target.checked)
          }} 
          name="promocoes" 
          color="primary" />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch 
          checked={novidades}
          onChange={(event)=>{
            setNovidades(event.target.checked)
          }} 
          name="novidades" 
          color="primary" />
        }
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

export default DadosPessoais;

import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({Enviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState("true");
  const [novidades, setNovidades] = useState("false");
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}});
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); //Impede carregamento de página no submit
        Enviar({nome, sobrenome, cpf, novidades, promocoes});
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
        id="Nome"
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
        
        onBlur={(event)=>{ //A mensagem de erro aparece ao sair do campo CPF
          const ehValido = validarCPF(cpf);
          setErros({cpf:ehValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
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

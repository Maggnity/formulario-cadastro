import React, { Component, Fragment } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import {validarCPF, validarSenha} from "./Models/cadastro"

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro Enviar={aoEnviarForm} validacoes={{cpf:validarCPF, senha:validarSenha, nome:validarSenha}} />
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}



export default App;

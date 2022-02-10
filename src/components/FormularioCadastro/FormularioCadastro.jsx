import { Stepper, Step, StepLabel, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({Enviar, validarCPF}) {
  
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(()=>{
    if(etapaAtual == formulario.length-1){
      Enviar(dadosColetados);
    }
  })

  const formulario = [
    <DadosUsuario Enviar={coletarDados} />,
    <DadosPessoais Enviar={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega Enviar={coletarDados}/>,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ];

  function coletarDados(dados){
    setDados({...dadosColetados, ...dados});
    proximo();
  }
  
  function proximo(dados){
    setEtapaAtual(etapaAtual+1);
  }
  return <>
  <Stepper activStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {formulario[etapaAtual]}
  </>;
}

export default FormularioCadastro;

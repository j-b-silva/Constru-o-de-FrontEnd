import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Formulario from "./Formulario";
import {adicionar} from "../services/ContatoService"

function Novo() {
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const trataEnviar = (data) =>{
    const resposta = adicionar(data);
    if(resposta.sucesso){
      navigate("/");
    } else {
      setErro(resposta.mensagem);
    }
  }


    return (
      <>
        <Cabecalho/>
        <Conteudo>
          <h2>Novo Contato</h2>
          <Formulario trataEnviar = {trataEnviar} valores={{}}/>
          {erro && <p>{erro}</p>}
        </Conteudo>
      </>
    );
  }
  
  export default Novo; 
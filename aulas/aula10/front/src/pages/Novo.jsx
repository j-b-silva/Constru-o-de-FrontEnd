import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Cabecalho from '../components/Cabecalho';
import Conteudo from '../components/Conteudo';
import Formulario from './Formulario';
import { criarContato } from '../services/ContatoService';

function Novo(){
    const [erro, setErro] = useState();
    const navigate = useNavigate();
    const onSalvar = (data)=>{
        const resposta = criarContato(data);
        if(resposta.sucessp){
            setErro("");
            navigate("/");
        } else {
            setErro(resposta.mensagem);
        }
        
    };

    return(
        <>
            <Cabecalho/>
            <Conteudo>
                <h2>Novo contato</h2>
                {erro && <p>{erro}</p>}
                <Formulario trataEnviar={onSalvar}/>
            </Conteudo>
        </>
    );
}

export default Novo;
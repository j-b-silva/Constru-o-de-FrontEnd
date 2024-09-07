import Logo from "../components/Logo";
import Titulo from "../components/Titulo";
import InputSenha from "../components/InputSenha";
import InputUser from "../components/InputUser";
import BotaoSubmit from "../components/BotaoSubmit";
import Link from "../components/Link";
import Rodape from "../components/Rodape";
import "./Login.css"
import Conteudo from "../components/Conteudo";

function Login(){
    const urlLogo = "https://www.svgrepo.com/show/489120/school.svg";
    const textologo = "Logo da Aplicação"
    return (
        <>
            <Conteudo estilo="login-form">
                <Logo imagem = {urlLogo} texto = {textologo} />
                <Titulo texto = {"Aluno Online"} />
                <InputUser/>
                <InputSenha/>
                <BotaoSubmit texto= "Entrar"/>
                <Link texto="Esqueceu a senha"/>
                <Link texto="Criar uma conta"/>
            </Conteudo>
            <Rodape/>
        </>
    );
}

export default Login; 
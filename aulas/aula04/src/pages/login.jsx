import Logo from "../components/Logo";
import Titulo from "../components/Titulo";
import InputSenha from "../components/InputSenha";
import InputUser from "../components/InputUser";
import Botao from "../components/Botao";
import Link from "../components/Link";
import Rodape from "../components/Rodape";
import "./Login.css"

function Login(){
    const urlLogo = "https://www.svgrepo.com/show/489120/school.svg";
    const textologo = "Logo da Aplicação"
    return (
        <>
            <main className="login-form">
                <Logo imagem = {urlLogo} texto = {textologo} />
                <Titulo texto = {"Aluno Online"} />
                <InputUser/>
                <InputSenha/>
                <Botao texto= "Entrar"/>
                <Link texto="Esqueceu a senha"/>
                <Link texto="Criar uma conta"/>
            </main>
            <Rodape/>
        </>
    );
}

export default Login; 
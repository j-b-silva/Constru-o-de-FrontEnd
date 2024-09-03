import Logo from "../components/Logo";
import Titulo from "../components/Titulo";
import InputSenha from "../components/InputSenha";
import InputUser from "../components/InputUser";
import BotaoSubmit from "../components/BotaoSubmit";
import Link from "../components/Link";
import Rodape from "../components/Rodape";

function Login(){
    return (
        <>
            <main>
                <Logo/>
                <Titulo/>
                <InputUser/>
                <InputSenha/>
                <BotaoSubmit/>
                <Link/>
                <Link/>
            </main>
            <Rodape/>
        </>
    );
}

export default Login; 
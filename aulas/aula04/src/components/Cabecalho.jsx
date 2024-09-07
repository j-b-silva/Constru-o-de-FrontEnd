import InputPesquisar from "./InputPesquisar";
import Titulo from "./Titulo";
import Logo from "./Logo";

function Cabecalho() {
  return (
    <header>
      <Logo imagem="" texto="Logo da Aplicação" />
      <Titulo texto="Aluno Online" />
      <InputPesquisar />
      <Logo imagem="" texto="Icone Pesquisar" />
    </header>
  );
}

export default Cabecalho;

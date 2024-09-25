# React + Vite

Aula 04 - Construção de FrontEnd
Prática 4

1. Criação do projeto Vite+React no VSCode.

Abra o Visual Studio Code (VSCode) no seu computador.

No canto superior esquerdo, clique em File (Arquivo) e selecione Open Folder… (Abrir Pasta…).

Escolha a pasta onde foi clonado o repositório do Github. Clique em Select Folder (Selecionar Pasta).

Abra o terminal do VSCode clicando em Terminal > New Terminal no menu superior.

Execute o comando git para listar a ramificação atual. Certifique que esteja na ramificação develop.

git branch

Execute o comando cd para acessar a pasta praticas.

cd praticas

Execute o comando npm para criar um novo projeto Vite com React. Siga as instruções, selecionando o framework React e a linguagem JavaScript.

npm create vite@latest pratica04

Execute o comando cd para acessar a pasta pratica04.

cd pratica04

Execute o comando npm para instalar dependências do projeto.

npm install


2. Execução de scripts do projeto Vite+React via NPM.

No terminal do VS Code, execute o comando npm para iniciar o servidor de desenvolvimento.

npm run dev

Abra o navegador e acesse o endereço http://localhost:5173 para visualizar sua aplicação React sendo executada.

No terminal, pare o servidor de desenvolvimento pressionando as teclas Ctrl+C. 
Execute o comando npm para criar uma build otimizada para produção. Observe se a pasta dist, contendo os arquivos da aplicação, foi gerada com sucesso.

npm run build

Execute o comando npm para testar a build localmente.

npm run preview

No navegador, acesse o endereço fornecido no terminal para visualizar a build da aplicação.

No terminal, pare o teste da build pressionando as teclas Ctrl+C. 


3. Compreensão da sintaxe do JSX.

Abra o arquivo App.jsx na pasta src.

Substitua o conteúdo do arquivo App.jsx pelo trecho abaixo. 

import './App.css';

function App() {
}

export default App;

Faça o componente App renderizar um elemento h1.

function App() {
  return <h1>Minha Aplicação React</h1>;
}

No terminal, execute o comando npm para iniciar o servidor de desenvolvimento.

No navegador, acesse o endereço fornecido no terminal para visualizar a aplicação.

No arquivo App.jsx, altere o código do componente App adicionando uma linha após a cláusula return. Observe se a aplicação foi renderizada corretamente.

function App() {
  return 
    <h1>Minha Aplicação React</h1>;
}

Envolva o elemento h1 com parênteses ( ). Observe se a aplicação foi renderizada corretamente.

function App() {
  return (
    <h1>Minha Aplicação React</h1>
  );
}

Adicione um elemento p abaixo do h1. Observe se a aplicação foi renderizada corretamente.

function App() {
  return (
    <h1>Minha Aplicação React</h1>
    <p>Este é um parágrafo em JSX!</p>
  );
}

Envolva os elementos h1 e p com um elemento div. Observe se a aplicação foi renderizada corretamente.

function App() {
  return (
   <div>
     <h1>Minha Aplicação React</h1>
     <p>Este é um parágrafo em JSX!</p>
   </div>
  );
}

Adicione um atributo class para o elemento div com o valor card. Observe se a aplicação foi renderizada corretamente.

function App() {
  return (
   <div class="card">
     <h1>Minha Aplicação React</h1>
     <p>Este é um parágrafo em JSX!</p>
   </div>
  );
}

Altere o nome do atributo class para className. Observe se a aplicação foi renderizada corretamente.

function App() {
  return (
   <div className="card">
     <h1>Minha Aplicação React</h1>
     <p>Este é um parágrafo em JSX!</p>
   </div>
  );
}


4.  Criação de um componente de função no React.

Crie uma pasta chamada components dentro da pasta src. 

Crie um arquivo Header.jsx dentro da pasta components. 

No arquivo Header.jsx, crie uma função Header() que retorna um elemento header.

function Header() {
  return (
   <header></header>
  );
}

Exporte o componente Header para ser acessado por outros módulos da aplicação. 

export default Header;

Abra o arquivo App.jsx e importe o componente Header criado. 

import Header from './components/Header';

Faça o componente App renderizar o componente Header acima do elemento h1.


Mova o elemento h1 do componente App para o componente Header, incluindo dentro do elemento header.

// no arquivo Header.jsx


// no arquivo App.jsx


Dentro da pasta components, crie um arquivo de estilo Header.css. 

Insira uma regra de estilo para o elemento header que define cores de fundo e texto, adiciona espaçamento interno, centraliza o conteúdo do elemento verticalmente e horizontalmente usando o Flexbox.

header {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
} 

Abra o arquivo Header.jsx e importe o estilo Header.css criado. Observe o resultado da renderização no navegador.

import './Header.css';


5. Formas de renderização de um componente no React.


6. Envio de alterações locais para repositório remoto do GitHub.

No terminal do VSCode, execute o comando cd para retornar a pasta raiz do projeto.

cd ../../

Execute o comando git para adicionar os arquivos criados ao repositório local.

git add .

Execute o comando git para efetivar a alteração com uma mensagem descritiva.

git commit -m "Adicionando arquivos da pratica04"

Execute o comando git para atualizar o repositório local com as mudanças na branch develop do repositório remoto.

git pull origin develop

Execute o comando git para enviar as alterações na branch develop para o repositório remoto.

git push origin develop

Atualize a página do repositório do GitHub no navegador para verificar se as alterações foram enviadas.

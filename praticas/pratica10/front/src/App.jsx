import {BrowserRouter, Routes, Route} from "react-router-dom";
import Listar from "./pages/Listar";
import Novo from "./pages/Novo";
import Erro404 from "./pages/Erro404";
import Editar from "./pages/Editar";

function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listar/>}/>
          <Route path="/novo" element={<Novo/>}/>
          <Route path="/editar/:id" element={<Editar/>}/>
          <Route path="*" element={<Erro404/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
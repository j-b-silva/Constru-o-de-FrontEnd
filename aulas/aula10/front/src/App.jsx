import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App(){
  return<BrowserRouter>
    <Routes>
      <Route path="/" element={<Listar/>}/>
      <Route path="/novo" element={<Novo/>}/>
      <Route path="/editar/:id" element={<Editar/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
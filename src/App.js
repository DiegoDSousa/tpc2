
import './App.css';
import Componente from './components/componente';
import Listaalunos from './components/listaalunos';
import React,{useState} from 'react';

function App() {
  const ListaAlunos=[]
  const [dadosListaAlunos,setDadosAlunos] = useState(ListaAlunos);

  const onguardarAluno = (dados)=>{

    setDadosAlunos((prevState)=>{
      return[dados, ...prevState];
    });

    console.log(dadosListaAlunos)
  }

  return (
    <div className="App">
      <Componente 
      onguardaraluno={onguardarAluno}></Componente>
     <Listaalunos dadosRenderizar={dadosListaAlunos}></Listaalunos>
    </div>
  );
}

export default App;

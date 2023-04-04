import React,{useState} from 'react';
import './componente.css';
import Popup
 from './popup';
function Componente(props){
    const [nomeAluno, setnomealuno]=useState('');
    const [nrfaltas, setnrfaltas] = useState('');
    const [buttonPopup, setPopup] = useState(false);
    const [SMS,setsms]=useState('');
    const [titulo,setitulo]=useState('');

    const submitHandler = (event)=>{

        event.preventDefault();
        if (nrfaltas<1 || nrfaltas>30 ){
            setPopup(true);
            setitulo("Input de faltas invalido");
            setsms("Por favor digite uma valor valido para falta (entre 1 a 30)");
        }else if(nomeAluno.length===0){
            setPopup(true);
            setitulo("Input de nome invalido");
            setsms("Por favor digite um nome valido");
        }
        else{
        let dados={
            nome:nomeAluno,
            faltas:nrfaltas
        }
        
        props.onguardaraluno(dados)}
    }

    const nameChangeHandler =(event)=>{
        setnomealuno(event.target.value)
    }

    const faltasHandler =(event)=>{
        setnrfaltas(event.target.value)
    }
    
    return(
        <div className='new-component'>
            <form onSubmit={submitHandler}>
                <div className = 'component-controls-1'>
                    <div className = 'new-component__control'>
                        <label>NOME</label>
                        <input type="text" value={nomeAluno} onChange={nameChangeHandler}></input>
                    </div>
                    <div className = 'new-component__control'>
                        <label>Faltas</label>
                        <input type="number" value = {nrfaltas} onChange={faltasHandler}></input>
                    </div>
                </div>
                <div className='new-component__actions'>
                    <button type='submit'>Adicionar</button>
                </div>
                <Popup  trigger={buttonPopup} 
                        setTriger={setPopup} 
                        titulo={titulo}
                        sms={SMS}>
                </Popup>
            
            </form>
        </div>
        
    );
}
export default Componente;
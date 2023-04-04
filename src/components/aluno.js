import './aluno.css'
function Aluno(props){
    return(
        <div className='div-aluno'>
            <p>{props.nome} : {props.faltas}</p>
            
        </div>
    );
}
export default Aluno
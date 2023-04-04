import Aluno from "./aluno";
import "./listaAluno.css"
function Listaalunos(props){
    const lista=props.dadosRenderizar
    
    return(
        <div className="lista">
            {lista.map((disci)=>{
                return(
                <Aluno
                    nome={disci.nome}
                    faltas={disci.faltas}>
                </Aluno>);
            }
            )}
            
        </div>
        
    );
}
export default Listaalunos;
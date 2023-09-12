import styles from "./Formulario.module.css"
import CampoTexto from "../Components/CampoTexto";
import { useState } from "react";
import api from '../service/api'

function Formulario(){
    const [titulo, setTitulo] = useState('')
    const [conteudo, setConteudo] = useState('')
    const [data, setData] = useState('')

    async function cadastrar(e) {
        e.preventDefault();
        try {
          await api.post('/publicacoes', {
            titulo: titulo,
            conteudo: conteudo,
            data: data
          });
          Addcard() 
          console.log('Enviado');
        } catch (err) {
          console.error('Error:', err);
        }
      }
      

    function  limpar(){
        let p = document.getElementById('formi')
        document.getElementById('titulo').value = ""; 
        document.getElementById('conteudo').value = "";   
        document.getElementById('data').value = "";   
        p.innerHTML = ""
        
    }    
    function Addcard(){
        const card = document.createElement('p')
        card.innerHTML += `Notícia enviada com sucesso!`
        document.getElementById("message").appendChild(card);  
    }
    return(
        <>             
        <form className={styles.form} onSubmit={cadastrar} >
            <h1>Formulário</h1>
            <div>                
                <CampoTexto                 
                    id="titulo" 
                    name="nome" 
                    type = "text" 
                    label ='Titulo' 
                    placeholder ='Titulo'
                    campoValor = {titulo}
                    aoAlterado = {campoValor => setTitulo(campoValor)}
                />             
            </div>          
            <div>
            <CampoTexto                 
                    id="conteudo" 
                    name="valor" 
                    type = "text" 
                    label ='Conteudo' 
                    placeholder ='Conteudo'
                    campoValor = {conteudo}
                    aoAlterado = {campoValor => setConteudo(campoValor)}
            />
              <CampoTexto                 
                    id="data" 
                    name="valor" 
                    type = "date" 
                    label ='Data' 
                    placeholder ='Data'
                    campoValor = {data}
                    aoAlterado = {campoValor => setData(campoValor)}
            />
            </div>
          
            <div>                               
                <button className={styles.btn}>cadastrar</button>
                <button className={styles.btn}onClick={()=> limpar()}>Limpar</button>
            </div>
            <div id="message"></div>
        </form>
       
        </>
    )
}

export default Formulario
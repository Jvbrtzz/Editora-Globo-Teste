import styles from "./Formulario.module.css"
import CampoTexto from "../Components/CampoTexto";
import { useEffect, useState } from "react";
import api from '../service/api'

function Formulario(){
    useEffect(() =>{
       
    },[])


    async function cadastrar(e){
        const response = await api.post('/formulario',{
            titulo,
            conteudo,
            data
        })

        e.preventDefault()
    }

    function  limpar(){
        let p = document.getElementById('formi')
        document.getElementById('titulo').value = ""; 
        document.getElementById('conteudo').value = "";   
        document.getElementById('data').value = "";   
        p.innerHTML = ""
        
    }    

    const [titulo, setTitulo] = useState('')
    const [conteudo, setConteudo] = useState('')
    const [data, setData] = useState('')

    function Addcard(){
        const card = document.createElement('p')
        card.innerHTML = `${titulo} e ${conteudo} e ${data}`
        document.getElementById("formi").appendChild(card);  
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
                <button className={styles.btn}onClick={()=> Addcard()}>cadastrar</button>
                <button className={styles.btn}onClick={()=> limpar()}>Limpar</button>
            </div>
            <div id="formi"></div>
        </form>
       
        </>
    )
}

export default Formulario
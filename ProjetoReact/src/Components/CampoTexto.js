import './CampoTexto.css'

const CampoTexto = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return (
        <div className="Formulario">
            <label>
                {props.label}
            </label>
            <input onChange={aoDigitado} value={props.campoValor} id={props.id} name={props.name} type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto

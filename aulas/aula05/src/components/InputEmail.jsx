function InputEmail(props){
    return(
        <>
            <label htmlFor="email">{props.texto}</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                value={props.valor}
                onChange={(e)=>{
                    props.mudaValor(e.target.value)
                }} 
                //target (quem sofreu evento + valor dele)
            />
        </>
    );
}

export default InputEmail;
function InputSenha(props){
    return(
        <>
            <label htmlFor="senha">{props.texto}</label>
            <input 
                type="password" 
                id="senha" 
                name="senha" 
                value={props.valor}
                onChange={(e)=>{
                    props.mudaValor(e.target.value)
                }} 
                //target (quem sofreu evento + valor dele)
            />
        </>
    );
}

export default InputSenha;
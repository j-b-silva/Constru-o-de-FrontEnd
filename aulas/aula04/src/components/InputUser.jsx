function InputUser(){
    return (
        <>
            <label htmlFor="usuario">Usuário</label>
            <input type="email" id="usuario" name="usuario" required/>
        </>
    );
}

export default InputUser;
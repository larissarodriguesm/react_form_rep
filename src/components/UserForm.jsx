import React, { useState } from 'react'

export const UserForm = () => {
    const [nome, setNome] = useState('')

    const handleNome = event => {
        //console.log(event.target.value)
        setNome(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log('submit', nome);
    }
    return (
        <div>
            <h1>Cadastrar Usuário</h1>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        value={nome}
                        onChange={ handleNome } />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="senha" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    )
}

import React, { useState } from "react";

function Cep() {

    const [cep, setCep] = useState('')
    const [address, setAddress] = useState(null)
    const [error, setError] = useState(null)


    const getAddress = async () => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json()

            if (data.erro) {
                setError('Cep não encontrado')
                setAddress(null)
            } else {
                setAddress(data)
                setError(null)
            }

        } catch (error) {
            setError('Erro ao buscar dados, tente novamnete mais tarde')
        }
    }
    const handleInputChange = (event) => {
        setCep(event.target.value)
    }


    return (
        <>
            <h1>Encontre seu endereço pelo CEP</h1>
            <input type="text" onChange={handleInputChange} />
            <button onClick={getAddress}>Buscar Endereço</button>
            {
                error ? (
                    <p>{error}</p>
                ) : address ? (
                    <div>
                        <p>Logradouro: {address.logradouro}</p>
                        <p>Bairro: {address.bairro}</p>
                        <p>Cidade: {address.localidade}</p>
                        <p>Estado: {address.uf}</p>
                    </div>
                ) : null
            }
        </>
    )
}

export default Cep
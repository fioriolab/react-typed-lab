import { useState, useCallback } from 'react'
import type { FormEvent } from 'react'
import './App.css'

interface infoProps {
  name: string,
  age: number
}

function App() {
  const [nome, setNome] = useState("")
  const [ano, setAno] = useState("")
  const [usuario, setUsuario] = useState<infoProps>()

  const gerarResultado = useCallback(() => {
    if(nome === '' || ano === '') {
      alert('[ERRO]: Digite nome e idade para descobrir sua idade!')
      return
    }

    setUsuario({
      name: nome,
      age: 2025 - Number(ano)
    })

    setNome("")
    setAno("")
  }, [calcular])

  function calcular(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <>
      <h1>Descubra sua idade</h1>

      <form onSubmit={calcular}>

        <div>
          <label htmlFor="nome">Digite seu nome:</label> <br />
          <input type="text" id="nome" placeholder="Digite seu nome ..."
          value={nome} onChange={(e) => setNome(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="anoNascimento">Digite o ano em que nasceu:</label> <br />
          <input type="text" id="anoNascimento" placeholder="Digite o ano de nascimento ..."
          value={ano} onChange={(e) => setAno(e.target.value)}/>
        </div>

        <input type="submit" value="Descobrir idade" onClick={gerarResultado} />

      </form>

      {usuario && Object.keys(usuario).length > 0 && (
        <h2>{usuario?.name} você tem: {usuario?.age} anos</h2>
      )}
    </>
  )
}

export default App

import { useState, useCallback } from 'react'
import logoImg from '../public/etanolgasolina.png'
import './App.css'

interface infoProps {
  title: string,
  etanol: number | string,
  gasolina: number | string
}

function App() {
  const [priceEtanol, setPriceEtanol] = useState<number | string>("")
  const [priceGasolina, setPriceGasolina] = useState<number | string>("")
  const [showPrice, setShowPrice] = useState<infoProps>()

  function verificar() {
    const valorEtanol = Number(priceEtanol)
    const valorGasolina = Number(priceGasolina)

    if(valorEtanol / valorGasolina >= 0.7) {
      setShowPrice({
        title: 'Gasolina',
        etanol: convertaReal(valorEtanol),
        gasolina: convertaReal(valorGasolina)
      })
    } else {
      setShowPrice({
        title: 'Etanol',
        etanol: convertaReal(valorEtanol),
        gasolina: convertaReal(valorGasolina)
      })
    }
  }

  function convertaReal(value: number) {
    const valorReal = value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
    return valorReal
  }

  return (
    <>
      <main>

        <img src={logoImg} />
        <h1>Etanol ou Gasolina</h1>

        <div>
          <label htmlFor="valor-etanol">Etanol (Preço por Litro):</label> <br />
          <input type="number" id='valor-etanol' placeholder="Valor Etanol"
          value={priceEtanol} onChange={(e) => setPriceEtanol(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="valor-gasolina">Gasolina (Preço por Litro):</label> <br />
          <input type="number" id="valor-gasolina" placeholder="Valor Gasolina"
          value={priceGasolina} onChange={(e) => setPriceGasolina(e.target.value)}/>
        </div>

        <button className="botao-verificar" onClick={verificar}>Verificar</button>

        {showPrice && Object.keys(showPrice).length > 0 && (
          <section className="resultado">
            <h1>Compensa usar {showPrice?.title}</h1>

            <p>Valor do Etanol: {showPrice?.etanol}</p>
            <p>Valor da Gasolina: {showPrice?.gasolina}</p>
        </section>
        )}

      </main>
    </>
  )
}

export default App

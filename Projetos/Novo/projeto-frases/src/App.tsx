import { useState } from 'react'
import logoImg from '../public/logo.png'
import './App.css'

function App() {

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        '"Siga os bons e aprenda com eles."',
        '"O bom-senso vale mais do que muito conhecimento."',
        '"O riso é a menor distância entre duas pessoas."',
        '"Deixe de lado as preocupações e seja feliz."',
        '"Realize o óbvio, pense no improvável e conquiste o impossível."',
        '"Acredite em milagres, mas não dependa deles."',
        '"A maior barreira para o sucesso é o medo do fracasso."'
      ]
    },
    {
      id: 2,
      nome: "Bom-Dia",
      frases: [
        '"Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!"',
        '"A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!"',
        '"Escreva em seu coração: todo dia é o melhor dia do ano."',
        '"Bom Dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol."',
      ]
    }
  ]

  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(allFrases[categoriaSelecionada].frases[numeroAleatorio])
  }

  return (
    <>
      <main>
        <img src={logoImg} />

        <h1>Categorias</h1>

        <div className="category-areas">
          {allFrases.map((item, index) => (
            <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
              }}
              onClick={() => handleSwitchCategory(index)}
              >
              {item.nome}
            </button>
          ))}
        </div>

        <button className="button-phrase" onClick={gerarFrase}>Gerar Frase</button>

        <section className="phrase">
          {/* Utilizando renderização condicional */}
          {textoFrase !== '' && <p className="textoFrase">{textoFrase}</p>}
        </section>

      </main>
    </>
  )
}

export default App

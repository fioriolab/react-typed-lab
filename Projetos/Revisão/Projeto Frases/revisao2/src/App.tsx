import { useState } from 'react'
import './App.css'
import logoImg from '../public/logo.png'

function App() {
  const allFrases = [
    {
      id: 1,
      nome: 'Motivação',
      frases: [
        '"O sucesso não é o final, o fracasso não é fatal: é a coragem de continuar que conta."',
        '"Acredite que você pode e você já está no meio do caminho."',
        '"Não espere por circunstâncias ideais. Elas nunca chegam. Comece onde você está, com o que você tem."',
        '"A disciplina é a ponte entre metas e realizações."',
        '"Grandes coisas nunca vêm de zonas de conforto."'
      ]
    },
    {
      id: 2,
      nome: "Bom-Dia",
      frases: [
        '"Bom dia! Que hoje você tenha clareza para enxergar as oportunidades e coragem para dar o primeiro passo em direção aos seus objetivos. Faça o dia valer a pena!"',
        '"Bom dia! Que a sua manhã comece com um sorriso e que o resto do dia seja repleto de pequenas alegrias e muita paz. Aproveite cada minuto."',
        '"Bom dia! A cada novo amanhecer, a vida nos oferece uma página em branco. Escreva uma história incrível hoje."'
      ]
    }
  ]

  const [frase, setFrase] = useState("")

  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  function handleCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrase() {
   let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
   setFrase(allFrases[categoriaSelecionada].frases[numeroAleatorio])
  }

  return (
    <>
      <main>

        <img src={logoImg} />

        <h1>Categorias</h1>

        <section className="area-categoria">
          {allFrases.map((item, index) => (
            <button 
              key={item.id}
              className="botao-categoria"
              style={{
                borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
                borderColor: "#1FA4DB"
              }}
              onClick={() => handleCategory(index)}
            >
              {item.nome}
            </button>
          ))}
        </section>

        <button className="botao-gerar" onClick={gerarFrase}>Gerar Frase</button>

        <section className="area-frase">
          {frase !== '' && <p>{frase}</p>}
        </section>

      </main>
    </>
  )
}

export default App

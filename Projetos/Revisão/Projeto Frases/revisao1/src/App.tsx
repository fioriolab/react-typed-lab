import { useState } from 'react'
import './App.css'
import logoImg from '../public/logo.png'

function App() {

  const frases = [
    {
      id: 1,
      nome: "Motivacional",
      frases: [
        '"O sucesso não é o final, o fracasso não é fatal: é a coragem de continuar que conta."',
        '"A persistência é o caminho do êxito."',
        '"Não espere por circunstâncias ideais. Elas nunca chegam. Comece onde você está e com o que você tem."',
        '"A maior glória em viver não reside em jamais cair, mas em nos levantar cada vez que caímos."',
        '"Você é mais forte do que imagina. Acredite nas suas capacidades e o mundo se abrirá para você."',
        '"O que você faz hoje pode melhorar todos os seus amanhãs."'
      ]
    },
    {
      id: 2,
      nome: "Bom-Dia",
      frases: [
        '"Bom dia! Cada amanhecer é uma nova página em branco. Escreva hoje uma história da qual você se orgulhe."',
        '"Que o seu dia seja leve, produtivo e cheio de pequenos motivos para sorrir. Bom dia!"',
        '"Bom dia! Não deixe que o barulho do mundo tire a sua paz. Foque nos seus objetivos e faça acontecer hoje."',
        '"Desejo que o seu dia seja tão incrível quanto a energia que você espalha por onde passa. Tenha um excelente dia!"',
        '"Que hoje o café seja forte e a vontade de vencer seja ainda maior. Bom dia!"'
      ]
    }
  ]

  const [frase, setFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * frases[categoriaSelecionada].frases.length)
    setFrase(frases[categoriaSelecionada].frases[numeroAleatorio])
  }

  return (
    <>
      <main>
        <img src={logoImg} />

        <h1>Categorias</h1>

        <section className="area-categoria">
          { frases.map((item, index) => (
            <button
            key={item.id}
            className="botao-categoria"
            style={{
              borderWidth: item.nome === frases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1FA4DB"
            }}
            onClick={() => handleSwitchCategory(index)}>
              {item.nome}
            </button>
          )) }
        </section>

        <button className="botao-gerar" onClick={gerarFrase}>Gerar Frase</button>

        <section>
          {frase !== '' && <p className="area-frase">{frase}</p>}
        </section>

      </main>
    </>
  )
}

export default App

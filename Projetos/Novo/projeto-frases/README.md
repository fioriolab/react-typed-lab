# 💡 Projeto Frases - React + TypeScript

Um gerador de frases aleatórias simples e funcional construído com **React**. O projeto permite que o usuário escolha entre diferentes categorias (como "Motivação" e "Bom-Dia") e gere uma frase inspiradora com um clique.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

* **React** (Vite)
* **TypeScript**
* **Hooks** (useState)
* **CSS3** (Estilização customizada)

---

## 📋 Funcionalidades

- [x] **Alternância entre categorias**: Escolha o tema da frase que deseja ler.
- [x] **Geração aleatória**: Algoritmo que seleciona uma frase diferente dentro da categoria.
- [x] **Renderização condicional**: A interface se adapta para exibir o conteúdo apenas após a interação.
- [x] **Feedback visual**: Destaque visual no botão da categoria que está ativa no momento.

---

## 🛠️ Como construir este projeto

Nesta seção, detalhamos a arquitetura lógica e o funcionamento do gerenciamento de dados da aplicação.

### 1. Estrutura de Dados
O coração do projeto é um array de objetos chamado `allFrases`. Esta estrutura foi pensada para facilitar a escalabilidade e o acesso indexado.

* **id:** Identificador único da categoria.
* **nome:** Título da categoria (ex: Motivação, Bom-Dia).
* **frases:** Um sub-array contendo as strings das frases correspondentes.



### 2. Gerenciamento de Estado
Utilizamos o hook `useState` para controlar dois pontos cruciais:

| Estado | Descrição |
| :--- | :--- |
| `textoFrase` | Armazena a string da frase selecionada aleatoriamente que será exibida na tela. |
| `categoriaSelecionada` | Armazena o índice numérico da categoria atual (ex: `0` para Motivação, `1` para Bom-Dia). |



### 3. Lógica Principal
A função `gerarFrase` utiliza a classe `Math` para sortear um índice aleatório dentro do array da categoria escolhida:

```javascript
function gerarFrase() {
  let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
  setTextoFrase(allFrases[categoriaSelecionada].frases[numeroAleatorio])
}
```



### 4. Renderização Condicional
A frase só aparece se o estado `textoFrase` não estiver vazio. Isso evita que um parágrafo vazio apareça na tela ao carregar a página

```javascript
{textoFrase !== '' && <p className="textoFrase">{textoFrase}</p>}
```

# 🎂 Calculadora de Idade - React + TypeScript

Uma aplicação simples e funcional desenvolvida em React para calcular a idade de um usuário com base no ano de nascimento informado. O projeto demonstra o uso de estados, manipulação de formulários e otimização com hooks.

## 🚀 Tecnologias Utilizadas

* **React** (Vite)
* **TypeScript** (Tipagem forte para interfaces)
* **Hooks**: `useState` e `useCallback`
* **CSS3**: Estilização da interface

## 🛠️ Funcionalidades

- [x] Entrada de nome e ano de nascimento.
- [x] Cálculo automático da idade baseado no ano atual (2025).
- [x] Validação de campos vazios com alerta de erro.
- [x] Renderização condicional do resultado.
- [x] Limpeza automática dos campos após o envio.

## 💻 Como funciona o código

O projeto utiliza uma interface `infoProps` para garantir que o objeto do usuário sempre tenha o formato correto:

```typescript
interface infoProps {
  name: string,
  age: number
}

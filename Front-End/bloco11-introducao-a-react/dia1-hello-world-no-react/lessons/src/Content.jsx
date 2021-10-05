import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];
class Content extends React.Component{
  render(){
    return (
    <div>
      {conteudos.map(el => {
        return (
          <div>
            <p>O conteudo é: {el.conteudo}</p>
            <p>O bloco é: {el.bloco}</p>
            <p>O status é: {el.status}</p>
          </div>
        )
      })}      
    </div>
    )
  }
  }

export default Content;
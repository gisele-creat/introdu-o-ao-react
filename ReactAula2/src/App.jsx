import { useState } from 'react'
import Saudacao from '../src/Components/Saudacao/Saudacao'
import BotaoDinamico from '../src/Components/BotaoDinamico/BotaoDinamico'
import './app.css'

function App() {

  const saldo =10
  const saldo2 =12
  return (
    <>
   <Saudacao nome = 'Fulano' saldo={saldo}/>
   <Saudacao nome = 'Maria' saldo={saldo2}/>
   <BotaoDinamico cor= 'blue'>Enviar</BotaoDinamico>
   <BotaoDinamico cor= 'pink'>Deletar</BotaoDinamico>
   </>
  )
}

export default App

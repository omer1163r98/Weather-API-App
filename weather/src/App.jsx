import { useState } from 'react'
import Mainpage from './components/Mainpage'
function App() {
  const [ input, setInput] = useState('');

  return (
    <>
    
    <Mainpage input = {input} setInput = {setInput}></Mainpage>
    </>
  )
}

export default App

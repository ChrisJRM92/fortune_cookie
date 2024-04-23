import { useState } from 'react'
import quotes from './utils/phrases.json'
import getRandomNumbers from './utils/getRandomNumbers'
import Phrase from './components/Phrase'
import Btn from './components/BtnC'
import './styles/style.css'
import VideoContainer from './components/video'
import Author from './components/Author'


function App() {
  const indexRandom = getRandomNumbers(quotes.length)
  
  const [phraseSelected, setphraseSelected] = useState(quotes[indexRandom])


  return (
  <>
    <div className='video'>
      <VideoContainer/>
    </div>
    <div className='blur'></div>
    <div className='containerP'>
      <div className='cardP'>
        <div className='description'>
          <div className='buttom_top'>
            <img className='perfil' src="foto.jpg" alt="" />
            <a href="https://github.com/ChrisJRM92" target='_blank' className='name'>&nbsp;| Christian R</a>
          </div>
        </div>
        <div className='cardS'>
          <h1 className='title'>Frases motivadoras</h1>
          <div><Phrase phraseSelected = {phraseSelected}/></div>
          <div className='secAuthor'><i class='bx bxs-user'></i>&nbsp;<Author phraseSelected={phraseSelected}/></div>
          <div><Btn setphraseSelected = {setphraseSelected}/></div>
          <div className='languages'><i class='bx bxl-html5'></i><i class='bx bxl-css3'></i><i class='bx bxl-javascript'></i><i class='bx bxl-react'></i></div>
        </div>
      </div>
    </div>
    
  </>
  )
}

export default App

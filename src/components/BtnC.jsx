import getRandomNumbers from '../utils/getRandomNumbers'
import quotes from '../utils/phrases.json'
import '../styles/style.css'

const btn = ({setphraseSelected}) => {
  
  const changePhrase = () => {
    const indexRandom = getRandomNumbers(quotes.length)
    setphraseSelected(quotes[indexRandom])
  }
  
  return (
    <a className='buttonPhrase' onClick={changePhrase}>Siguiente frase</a>
  )
}

export default btn
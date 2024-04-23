import '../styles/style.css'

const Phrase = ({phraseSelected}) => {
    return (
    <p className="phrase">{phraseSelected.phrase}</p>
  )
}

export default Phrase
import '../styles/style.css'

const Author = ({phraseSelected}) => {

    return (
    <p className="author">{phraseSelected.author}</p>
  )
}

export default Author
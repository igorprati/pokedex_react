import { Link } from 'react-router-dom'
import igor from '../Img/igor.jpg';


export default function About() {
  return(
    <div className="app__about">
      <div className="app__about__container">
        <h2>Meu nome <del>não</del>  é Enéas!</h2>
        <p className="app__about__header"> Olá, meu nome é Igor, e eu pareço com esse cara de baixo:</p>
        <img className="app__about__me" src={igor} alt="the author" />

        <p className="app__about__main">Gosto de estudar e discutir assuntos um tanto quanto peculiares da área de Filosofia, gosto e amo programar (estou aprendendo) porque amo desafios e resolver problemas. Quero me especializar na área de Front-end e UX Design.</p>

        <p className="app__about__close">Chega mais, bora conectar!</p>

        <div className="app__about__links">
          <a href="https://github.com/igorprati" target="_blank" rel="noreferrer">
            <i class="im im-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/igorprati/" target="_blank" rel="noreferrer">
            <i class="im im-linkedin"></i>
          </a>
        </div>



        <Link className="app__about__link" to="/">Voltar</Link>
      </div>
      
    </div>
  )
}
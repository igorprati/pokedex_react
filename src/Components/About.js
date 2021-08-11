import { Link } from 'react-router-dom'
import proud from '../Img/proud.gif';
import isa from '../Img/isa.jpg';
import bye from '../Img/bye.gif';

export default function About() {
  return(
    <div className="app__about">
      <div className="app__about__container">
        <h2>Eu que fiz!</h2>
        <img className="app__about__gif" src={proud} alt="proud woman" />
        <p className="app__about__header"> Olá, meu nome é Isabella, não a do gif (quem dera) essa aqui a seguir:</p>
        <img className="app__about__me" src={isa} alt="the author" />

        <p className="app__about__main">Eu sou uma guria simples, gosto de trabalhar fazendo programas até altas horas da madrugada. Adoro animais e estou caminhando para ser vegetariana (difícil), sou sedentária e gorda, porém feliz (é possível, acredite). Adoro jogos antigos e séries de distopias e ficção ciêntífica (NERD).</p>

        <p className="app__about__close">Bora fechar? Segue lá:</p>

        <div className="app__about__links">
          <a href="https://github.com/isabellanunes" target="_blank" rel="noreferrer">
            <i class="im im-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/isabellanunes/" target="_blank" rel="noreferrer">
            <i class="im im-linkedin"></i>
          </a>
        </div>

        <img className="app__about__bye" src={bye} alt="bye bye" />

        <Link className="app__about__link" to="/">Voltar</Link>
      </div>
      
    </div>
  )
}
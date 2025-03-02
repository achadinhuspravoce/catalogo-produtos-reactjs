import './Footer.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as LinkScroll, scroller } from "react-scroll";
import youtube from '../assets/youtube.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'

const Footer = () => {
  const today = new Date();
  const location = useLocation(); // Pega a página atual
  const navigate = useNavigate(); // Para navegar entre páginas

  // Função que rola para a seção correta (mesmo se estiver fora da Home)
  const handleScroll = (target: string) => {
    if (location.pathname !== "/") {
      navigate("/"); // Vai para a página inicial antes de rolar
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 100); // Pequeno delay para garantir que a Home carregou
    } else {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };

  return (
    <>
        <footer>
            <div id="contato" className="Container Flex5">
                <div>
                    <p>Copyright &#169; {today.getFullYear()}. <a href="https://catalogo.achadinhus.com.br/" target="_blank">Achadinhus pra Voc&#234;!</a></p>
                </div>
                <div>
                    <ul className="footer-links">
                        <li><Link to="/politica/privacidade">Políticas de Privacidade</Link></li>
                        <li><Link to="/politica/cookies">Políticas de Cookies</Link></li>
                        <li><button onClick={() => handleScroll("sobre")}>Sobre Nós</button></li>
                    </ul>
                </div>
                <div id="social">
                    <a href="https://www.youtube.com/@achadinhus.pravoce" target="_blank"><img src={youtube} alt="youtube" /></a>
                    <a href="https://www.facebook.com/achadinhus.pravoce" target="_blank"><img src={facebook} alt="facebook" /></a>
                    <a href="https://www.instagram.com/achadinhus.pravoce/" target="_blank"><img src={instagram} alt="instagram" /></a>
                    <a href="https://www.tiktok.com/@achadinhus.pravoce" target="_blank"><img src={tiktok} alt="tiktok" /></a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
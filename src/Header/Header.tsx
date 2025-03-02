import  './Header.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import achadinhusLogo from '../assets/achadinhus_amarelo_logo.png'
import waBranco from '../assets/whatsapp_branco.png'
import teBranco from '../assets/telegram_branco.png'

const Header = () => {
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
        <header id="inicio">
            <div className="Container Flex">
                <div id="logo">
                    <img src={achadinhusLogo} alt="achadinhus" />
                </div>
                <div className="rede-sociais">
                  <div>
                    <div>
                        <a href="https://whatsapp.com/channel/0029VafNLQP0bIdefGel6g38" target="_blank">
                            <img src={waBranco} alt="whatsapp" title="Abrir Catálogo no Whatsapp" />
                        </a>
                    </div>
                    <div>
                        <a href="https://t.me/+IZgDquxDovU0NDJh" target="_blank">
                            <img src={teBranco} alt="telegram" title="Abrir Catálogo no Telegram" />
                        </a>
                    </div>
                  </div>
                  <span>Nosso Catálogo, acesse!</span>
                </div>
                <nav>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check">&#x268c;</label>
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><button onClick={() => handleScroll("sobre")}>Sobre</button></li>
                        <li><button onClick={() => handleScroll("categorias")}>Categorias</button></li>
                        <li><button onClick={() => handleScroll("contato")}>Contato</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header
import  './Header.css'
import achadinhusLogo from '../assets/achadinhus_amarelo_logo.png'
import waBranco from '../assets/whatsapp_branco.png'
import teBranco from '../assets/telegram_branco.png'

const Header = () => {
  return (
    <>
        <header id="inicio">
            <div className="Container Flex">
                <div id="logo">
                    <img src={achadinhusLogo} alt="achadinhus" />
                </div>
                <div id="whatsapp_header">
                    <a href="https://whatsapp.com/channel/0029VafNLQP0bIdefGel6g38" target="_blank">
                        <img src={waBranco} alt="whatsapp" title="Abrir Catálogo no Whatsapp" />
                    </a>
                </div>
                <div id="telegram_header">
                    <a href="https://t.me/+IZgDquxDovU0NDJh" target="_blank">
                        <img src={teBranco} alt="telegram" title="Abrir Catálogo no Telegram" />
                    </a>
                </div>
                <label id="texto_canais">Canal Achadinhus</label>
                <nav>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check">&#x268c;</label>
                    <ul>
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#conteudo">Conteúdo</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header
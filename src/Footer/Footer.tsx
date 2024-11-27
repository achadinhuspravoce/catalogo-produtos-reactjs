import './Footer.css'
import youtube from '../assets/youtube.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'

const Footer = () => {
  const today = new Date();

  return (
    <>
        <footer>
            <div id="contato" className="Container Flex5">
                <div>
                    <p>Copyright &#169; {today.getFullYear()}. <a href="https://catalogo.achadinhus.com.br/" target="_blank">Achadinhus pra Voc&#234;!</a></p>
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
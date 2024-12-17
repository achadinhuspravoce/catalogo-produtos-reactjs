import './Main.css'
import amazonLogo from '../assets/amazon_logo.png'
import magaluLogo from '../assets/magalu_logo.png'
import mercadolivreLogo from '../assets/mercado_livre_logo.png'


const Main = () => {
  return (
    <>
      <main>
        <div className="Container">
          <h1>Tudo pra Você</h1>
          <h2>Descubra os melhores achados da internet para aproveitar e surpreender quem você ama!</h2>
          <div className="parceiros">
            <h3>Trabalhamos com as melhores Lojas nos melhores Marketing places</h3>
            <img src={amazonLogo} alt="Amazon" />
            <img src={magaluLogo} alt="Magalu" />
            <img src={mercadolivreLogo} alt="Mercado Livre" />
          </div>
        </div>
      </main>
    </>
  )
}

export default Main
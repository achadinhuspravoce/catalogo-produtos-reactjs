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
                <h2>Os melhores achadinhos da internet para você aproveitar e presentear quem você mais ama</h2>
                <div className="parceiros">
                    <h3>Trabalhamos com as melhores Lojas nos melhores Marketing places</h3>
                    <img src={amazonLogo} alt="Amazon" />
                    <img src={magaluLogo} alt="Amazon" />
                    <img src={mercadolivreLogo} alt="Amazon" />
                </div>
            </div>
        </main>
    </>
  )
}

export default Main
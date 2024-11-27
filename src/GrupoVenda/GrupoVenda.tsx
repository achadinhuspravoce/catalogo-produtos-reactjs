import './GrupoVenda.css'
import qrcodewa from '../assets/qrcode_wa.png'
import qrcodete from '../assets/qrcode_te.png'
import whatsapp from '../assets/whatsapp.png'
import telegram from '../assets/telegram.png'

const GrupoVenda = () => {
  return (
    <>
        <section id="wireframe">
            <div className="Container canais_catalogo">
                <div id="texto_redessociais">
                    <h2>Quer ter o catálogo com mais conforto e facilidade?</h2>
                    <br/>
                    <h4>Acesse nossos canais.</h4>
                </div>
                <div id="whatsapp_box">
                    <div id="qrcode_wa">
                        <img src={qrcodewa} alt="qrcode" />
                    </div>
                    <a href="https://whatsapp.com/channel/0029VafNLQP0bIdefGel6g38" target="_blank">
                        <img src={whatsapp} alt="whatsapp" title="Abrir Catálogo no Whatsapp" width="64" height="64" />
                    </a>
                </div>
                <div id="telegram_box">
                    <a href="https://t.me/+IZgDquxDovU0NDJh" target="_blank">
                        <img src={telegram} alt="telegram" title="Abrir Catálogo no Telegram" width="64" height="64" />
                    </a>
                    <div id="qrcode_te">
                        <img src={qrcodete} alt="qrcode" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default GrupoVenda
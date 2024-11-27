import './Carrossel.css'

const Conteudo = ({children, categoria}) => {
  return (
    <>
        <section id="categorias">
            <div className="Container">
              <div className="carousel slide" data-ride="carousel">
                  <h2>{categoria}</h2>
                  <div className="carousel-inner">
                    {children}
                  </div>
                  <button type="button" className="carousel-control-prev" role="button" data-bs-slide="prev" data-bs-target="#carousel_eletronicos">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only"></span>
                  </button>
                  <button type="button" className="carousel-control-next" role="button" data-bs-slide="next" data-bs-target="#carousel_eletronicos">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only"></span>
                  </button>
              </div>
            </div>
        </section>
    </>
  )
}

export default Conteudo
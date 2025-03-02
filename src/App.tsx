import { useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header/Header.tsx'
import Main from './Main/Main.tsx'
import './App.css'
import Carrossel from './Carrossel/Carrossel.tsx'
import Card from './Carrossel/Card.tsx'
import GrupoVenda from './GrupoVenda/GrupoVenda.tsx'
import Sobre from './Sobre/Sobre.tsx'
import Footer from './Footer/Footer.tsx'
import BotaoUp from './Footer/BotaoUp.tsx'
import Privacidade from './Politicas/Privacidade.tsx'
import Cookies from './Politicas/Cookies.tsx'
import {Produto} from './Entities/Produto'

function App() {

  const [produtos, setRecords] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://catalogoproduto.azurewebsites.net/api/CatalogoProduto', {
      method: "GET", 
      headers:{
        "x-functions-key": `${import.meta.env.VITE_APP_API_KEY}`,
        "content-type": "application/json"
     }})
    .then(response => response.json())
    .then(data => setRecords(data))
    .catch(err => console.log(err))
  }, []);

  const categorias = Array.from(new Set(produtos.map(p =>
    p.catalogo
  )));

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/politica/privacidade" element={<Privacidade />} />
          <Route path="/politica/cookies" element={<Cookies />} />
          <Route path="/" element={
            <>
              <Main></Main>
              <section id="categorias">
                <div className="Container">
                  {categorias.map((c, i) => (
                    <Carrossel key={i} categoria={c}>
                      {produtos.filter(pro => pro.catalogo === c).map((card, icard) => (
                        <Card key={icard} p={card} />
                      ))}
                    </Carrossel>
                  ))}
                </div>
              </section>
              <GrupoVenda></GrupoVenda>
              <Sobre></Sobre>
            </>
          }/>
        </Routes>
        <Footer></Footer>
        <BotaoUp></BotaoUp>  
      </Router>
      
    </>
  )
}

export default App

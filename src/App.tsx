import { useEffect, useState} from 'react'
import Header from './Header/Header.tsx'
import Main from './Main/Main.tsx'
import './App.css'
import Carrossel from './Carrossel/Carrossel.tsx'
import Card from './Carrossel/Card.tsx'
import GrupoVenda from './GrupoVenda/GrupoVenda.tsx'
import Sobre from './Sobre/Sobre.tsx'
import Footer from './Footer/Footer.tsx'
import BotaoUp from './Footer/BotaoUp.tsx'


function App() {

  interface Produto {
    nome: string;
    preco: string;
    descricao: string;
    rodape: string;
    catalogo: string;
    filiacao: string;
    linkProduto: string;
    linkImagem: string;
    freteFree: boolean;
  }
  const [produtos, setRecords] = useState<Produto[]>([])
  const apiKey = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    fetch('https://catalogoproduto.azurewebsites.net/api/CatalogoProduto', {
      method: "GET", 
      headers:{
        "x-functions-key": `${apiKey}`,
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
      <Header></Header>
      <Main></Main>
      
      <section id="categorias">
        <div className="Container">
          {categorias.map((c, i) => (
            <Carrossel key={i} categoria={c}>
              {produtos.filter(p => p.catalogo === c).map((card, icard) => (
                <Card key={icard} titulo={card.nome} descricao={card.descricao} />
              ))}
            </Carrossel>
          ))}
        </div>
      </section>

      <GrupoVenda></GrupoVenda>
      <Sobre></Sobre>
      <Footer></Footer>
      <BotaoUp></BotaoUp>
    </>
  )
}

export default App

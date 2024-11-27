import Header from './Header/Header.tsx'
import Main from './Main/Main.tsx'
import './App.css'
import Carrossel from './Carrossel/Carrossel.tsx'
import CarrosselItem from './Carrossel/CarrosselItem.tsx'
import Card from './Carrossel/Card.tsx'
import GrupoVenda from './GrupoVenda/GrupoVenda.tsx'
import Sobre from './Sobre/Sobre.tsx'
import Footer from './Footer/Footer.tsx'
import BotaoUp from './Footer/botaoUp.tsx'

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Carrossel categoria="Cozinha">
        <CarrosselItem>
          <Card titulo="Conjunto de Bowls Inox Eletrolux" descricao="Conjunto de bowls em inox da Electrolux: duráveis, práticos e ideais para preparar e servir alimentos."></Card>
          <Card titulo="Conjunto de Bowls Inox Eletrolux" descricao="Conjunto de bowls em inox da Electrolux: duráveis, práticos e ideais para preparar e servir alimentos."></Card>
          <Card titulo="Conjunto de Bowls Inox Eletrolux" descricao="Conjunto de bowls em inox da Electrolux: duráveis, práticos e ideais para preparar e servir alimentos."></Card>
          <Card titulo="Conjunto de Bowls Inox Eletrolux" descricao="Conjunto de bowls em inox da Electrolux: duráveis, práticos e ideais para preparar e servir alimentos."></Card>
        </CarrosselItem>
        <CarrosselItem>
          <Card titulo="Conjunto de Bowls Inox Eletrolux" descricao="Conjunto de bowls em inox da Electrolux: duráveis, práticos e ideais para preparar e servir alimentos."></Card>
          <Card titulo="Conjunto de Bowls Inox Eletrolux" descricao="Conjunto de bowls em inox da Electrolux: duráveis, práticos e ideais para preparar e servir alimentos."></Card>
          <Card titulo="Conjunto de Bowls Inox Eletrolux" descricao="Conjunto de bowls em inox da Electrolux: duráveis, práticos e ideais para preparar e servir alimentos."></Card>
          <Card titulo="Conjunto de Bowls Inox Eletrolux" descricao="Conjunto de bowls em inox da Electrolux: duráveis, práticos e ideais para preparar e servir alimentos."></Card>
        </CarrosselItem>
      </Carrossel>
      <GrupoVenda></GrupoVenda>
      <Sobre></Sobre>
      <Footer></Footer>
      <BotaoUp></BotaoUp>
    </>
  )
}

export default App

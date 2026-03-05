import { Categorias } from "./components/Categorias"
import { Contato } from "./components/Contato"
import { Depoimentos } from "./components/Depoimentos"
import { Experiencia } from "./components/Experiencia"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { MeuOlhar } from "./components/Olhar"

import { Routes, Route } from "react-router-dom"
import { Portfolio } from "./pages/Portfolio"

function App() {
  return (
    <Routes>
      {/* Rota principal com todos os componentes da Home */}
      <Route path="/" element={
        <>
          <Header />
          <Hero />
          <Categorias />
          <Experiencia />
          <Depoimentos />
          <MeuOlhar />
          <Contato />
        </>
      } />

      {/* Rota dinâmica para o portfólio */}
      <Route path="/portfolio/:category" element={<Portfolio />} />
    </Routes>
  );
}

export default App

import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Contato from "./pages/Contato/Contato"
import FAQ from "./pages/FAQ/FAQ"
import Agendamento from "./pages/Agendamento/Agendamento"
import Blog from "./pages/Blog/Blog"
import Voluntario from "./pages/Voluntarios/Voluntario"
import Configuracoes from "./pages/Configuracoes/Configuracoes"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/contato" element={<Contato/>}></Route>
      <Route path="/faq" element={<FAQ/>}></Route>
      <Route path="/agendamento" element={<Agendamento/>}></Route>
      <Route path="/voluntario" element={<Voluntario/>}></Route>
      <Route path="/configuracoes" element={<Configuracoes/>}></Route>
    </Routes>
  )
}

export default App

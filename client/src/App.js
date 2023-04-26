import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Formulario from "./Components/FormularioComponents/Formulario";
import ChatBot from "./Components/ChatBotComponents/ChatBot";
import Home from "./Components/Home/Home";
import 'animate.css';
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/chat/:cpf' element={<ChatBot />} />
          <Route exact path='/form' element={<Formulario />} />
        </Routes>
    </Router>
  );
}
export default App;

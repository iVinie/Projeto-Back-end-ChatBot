import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Formulario from "./Components/FormularioComponents/Formulario";
import ChatBot from "./Components/ChatBotComponents/ChatBot";
import Home from "./Components/Home/Home";
import 'animate.css';
import Header from "./Components/Home/Header";


function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/chat' element={<ChatBot />} />
          <Route exact path='/form' element={<Formulario />} />
        </Routes>
    </Router>
  );
}

export default App;

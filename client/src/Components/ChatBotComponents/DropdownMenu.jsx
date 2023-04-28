import { useState } from 'react';
import '../../assets/css/dropMenu.css'
import Axios from 'axios'

function DropdownMenu({ name, cpf }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleLogout() {
    Axios.post('http://localhost:3001/sair', {
      cpf: cpf
    }).then((res) => {
      console.log(res)
      if(res.status === 200){
        window.location.href = `http://localhost:3000`;
      }
    }).catch((res) => {
      console.log(res)
    })
  }

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={handleClick}>
        <p className="name">{name}</p>
        <span class="icon">&#9776;</span>
      </div>
      {isOpen && (
        <ul className="menu">
          <li onClick={() => handleLogout ()}>Sair</li>
        </ul>
      )}
    </div>
  );
}
export default DropdownMenu
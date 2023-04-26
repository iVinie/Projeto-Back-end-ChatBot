import Axios from 'axios'
function timeLinkTwo(name, cpf) {
  Axios.post("http://localhost:3001/testarLogin",{
    name: name,
    cpf: cpf
  }).then((res) => {
    setTimeout(() => {
      window.location.href = `http://localhost:3000/chat/${cpf}/${name}`;
  },2000);
  }).catch((error) => {
    console.error(error)
    setTimeout(() => {
      window.location.href = `http://localhost:3000`;
  },2000);
});
}
export {timeLinkTwo};

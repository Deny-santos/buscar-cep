import api from "./services/api"
import {useState} from "react" 
import {FiSearch} from "react-icons/fi"
import "./style.css"

function App() {
  
  const [input, setInput] = useState("")
  const [cep, setCep] = useState({})

  async function search(){
    if(input === ''){
      alert('preencha o campo')
      return
    }

    try{
      const response = await api.get(`${input}/json`)
      console.log(response.data)
      setCep(response.data)
      setInput("")

    }catch{
      alert("erro ao buscar")
      setInput("")
    }
  }
  return (

    <div className="App">

      <div className="container"> 
        <h1 className="title">buscador de CEP</h1>
        
        <div className="input">
        
          <input
            type="number" 
            placeholder="Digite Seu CEP" 
            value={input}
            onChange={(e) => { setInput(e.target.value)}} />
          <button className="bt" onClick={search}><FiSearch size={25} color="#000"/></button>
        
        </div>

      {Object.keys(cep).length > 0 && (
      //renderizaçao condicional
      <main className="main">
        <h2>CEP : {cep.cep}</h2>
        <span>complemento : {cep.complemento}</span>
        <span>ddd : {cep.ddd}</span>
        <span> bairro : {cep.bairro}</span>
        <span>cidade : {cep.localidade}</span>
        <span>Estado: {cep.uf}</span>
      </main>

      )}

      </div>

    </div>
  );
}

export default App;

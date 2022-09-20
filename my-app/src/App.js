import React, { useState } from 'react';
import './App.css';


function App() {
  const botonActivo = (name !== undefined && name !=="") && (surname !== undefined && surname !=="") && (chum !== undefined && chum !=="");
  const [formularioEnv, setFormEnv] = useState(false);

  const[name ,setName]=useState();
  const[surname ,setSurname]=useState();
  const[chum ,setChum]=useState();
 
  const enviar = (event) => {
    event.preventDefault();
    setFormEnv(true);
  }

  const limpiar = (event) =>{
    setCliente({name:"",surname:"",chum:""})
  }


  return (
    <div className="App">
      <main>
        <form onSubmit={enviar}>
            <div className container>
            <div>
                <div className span>
                <label htmlFor=''>Nombre:</label>
                <input type="text" value={name} name="nombre" onChange={manejarName}/>
                </div>
            </div>
            <div>
            <div className span>
                <label htmlFor=''>Apellido:</label>
                <input type="text" value={surname} name="apellido" onChange={manejarSurname}/>
                </div>
            </div>
            <div>
            <div className span>
                <label htmlFor=''>Apodo:</label>
                <input type="text" value={chum} name="apodo" onChange={manejarChum}/>
                </div>
            </div>
            <div className button>
            <button type = "submit" disabled={!botonActivo}>Enviar</button>
            <button onClick={limpiar}>Limpiar</button>
            </div>
            </div>
        </form>
        {formularioEnv && (
          <p>Datos: {`${name}`} {`${surname}`} {`${chum}`}</p>
        )}
      </main>
    </div>
  );
}

export default App;
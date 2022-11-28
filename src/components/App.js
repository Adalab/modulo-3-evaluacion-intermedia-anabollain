import React from 'react';
import {useState, useEffect} from 'react';
import callToApi from '../services/apiAdalabers';
//import data from '../data';
//import ls from '../services/localStorage';
import '../styles/App.scss';

function App() {
  //STATE VARIABLES
  const [adalabersList, setAdalabersList] = useState([]);
  const [newAda, setNewAda] = useState({
    id: '',
    name: '',
    counselor: '',
    speciality: '',
    social_networks: []
  });

  //USE EFFECT
  useEffect(() => {
    callToApi().then((response) => {
      setAdalabersList(response);
    })
  }, []);

  //EVENT FUNCTIONS

  const handleNewAda = (ev) => {
    setNewAda({...newAda, [ev.target.id] : ev.target.value})
  }

  const handleNewAdaClick = () => {
    if(newAda.name !== '' && newAda.counselor !== '' && newAda.speciality !== '' ){
      setAdalabersList([...adalabersList, newAda]);
      setNewAda({
        id: '',
        name: '',
        counselor: '',
        speciality: '',
        social_networks: []
      });
    }else{
      alert('Debes rellenar todos los valores.')
    }
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  //RENDER FUNCTIONS
  const renderAdalabers = () =>{
    return adalabersList.map((eachAda)=>{
        return(
          <tr key={eachAda.id}>
            <td>{eachAda.name}</td>
            <td>{eachAda.counselor}</td>
            <td>{eachAda.speciality}</td>
          </tr>
        )
      }) 
};

  //RETURN
  return (
    <React.Fragment>
      {/*Header*/}
      <header>
        <h1>Adalabers</h1>
      </header>
      {/*Main*/}
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" id="name" placeholder='Ej.: MariCarmen'/>
          <label htmlFor="">Escoge una tutora:</label>
          <select name="mentor" id="mentor">
            <option name="mentor" id="mentor" value="">Escoge una opción</option>
            <option name="mentor" id="mentor" value="yanelis">Yanelis</option>
            <option name="mentor" id="mentor" value="dayana">Dayana</option>
            <option name="mentor" id="mentor" value="ivan">Iván</option>
            <option name="mentor" id="mentor" value="miguel">Miguel</option>
          </select>
        </form>
        <table>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Tutora</td>
              <td>Especialidad</td>
            </tr>
          </thead>
          <tbody>
            {renderAdalabers()}
          </tbody>
        </table>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <h2>Añadir una Adalaber</h2>
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" id="name" placeholder='Ej.: MariCarmen' value={newAda.name} onChange={handleNewAda}/>
          <label htmlFor="counselor">Tutora:</label>
          <input type="text" name="counselor" id="counselor" placeholder='Ej.: Yanelis' value={newAda.counselor} onChange={handleNewAda}/>
          <label htmlFor="speciality">Especialidad:</label>
          <input type="text" name="speciality" id="speciality" placeholder='Ej.: Python' value={newAda.speciality} onChange={handleNewAda}/>
          <input type="submitt" value="Añadir una nueva Adalaber" onClick={handleNewAdaClick}/>
        </form>
      </section>
    </React.Fragment>
  );
}

export default App;

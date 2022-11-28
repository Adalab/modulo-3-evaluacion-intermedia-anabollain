import React from 'react';
import {useState, useEffect} from 'react';
import callToApi from '../services/apiAdalabers';
//import data from '../data';
//import ls from '../services/localStorage';
import '../styles/App.scss';

function App() {
  //STATE VARIABLES
  const [adalabersList, setAdalabersList] = useState([]);

  //USE EFFECT
  useEffect(() => {
    callToApi().then((response) => {
      setAdalabersList(response);
    })
  }, []);

  //EVENT FUNCTIONS
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
        <form>
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
        <form>
          <h2>Añadir una Adalaber</h2>
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" id="name" placeholder='Ej.: MariCarmen'/>
          <label htmlFor="counselor">Tutora:</label>
          <input type="text" name="counselor" id="counselor" placeholder='Ej.: Yanelis'/>
          <label htmlFor="speciality">Especialidad:</label>
          <input type="text" name="speciality" id="speciality" placeholder='Ej.: Python'/>
          <input type="submitt" value="Añadir una nueva Adalaber" />
        </form>
      </section>
    </React.Fragment>
  );
}

export default App;

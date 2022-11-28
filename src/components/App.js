import React from 'react';
import {useState, useEffect} from 'react';
import callToApi from '../services/apiAdalabers';
import ls from '../services/localStorage';
import '../styles/App.scss';

function App() {

  //STATE VARIABLES
  //Adalabers main list
  const [adalabersList, setAdalabersList] = useState([]);
  //New adalaber object, to fill with input information
  const [newAda, setNewAda] = useState({
    id: '',
    name: '',
    counselor: '',
    speciality: '',
    social_networks: []
  });
  //Search form object to fill with input information
  const [searchAda, setSearchAda] = useState(ls.get('searchAdaInputs',{
    name: '',
    counselor: ''
  }));

  //USE EFFECT
  useEffect(() => {
    callToApi().then((response) => {
      setAdalabersList(response);
    })
  }, []);

  //EVENT FUNCTIONS

  //Function to create object for a new Adalaber
  const handleNewAda = (ev) => {
    setNewAda({...newAda, [ev.target.id] : ev.target.value})
  }

  //Function to add a new Adalaber to the list
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

  //General functions for forms
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  //Function for search filter
  const handleSearchAda = (ev) => {
    if(ev.target.value !== ''){
      const selectedValue = ev.target.value;
      const transformedValue = selectedValue[0].toUpperCase() + selectedValue.substring(1);
      setSearchAda({...searchAda, [ev.target.id] : transformedValue});
      ls.set('searchAdaInputs',{...searchAda, [ev.target.id] : transformedValue});
    }else{
      setSearchAda({...searchAda, [ev.target.id] : ev.target.value});
    }
  }

  //RENDER FUNCTIONS
  const renderAdalabers = () =>{
    return adalabersList
    .filter((eachAda) => eachAda.name.toLowerCase().includes(searchAda.name.toLowerCase()))
    .filter((eachAda) => eachAda.counselor.toLowerCase().includes(searchAda.counselor.toLowerCase()))
    .map((eachAda)=>{
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
          <input type="text" name="name" id="name" autoComplete="off" placeholder='Ej.: MariCarmen' value={searchAda.name} onChange={handleSearchAda}/>
          <label htmlFor="">Escoge una tutora:</label>
          <select name="counselor" id="counselor" value={searchAda.counselor} onChange={handleSearchAda}>
            <option name="counselor" id="counselor" value="">Escoge una opción</option>
            <option name="counselor" id="counselor" value="yanelis">Yanelis</option>
            <option name="counselor" id="counselor" value="dayana">Dayana</option>
            <option name="counselor" id="counselor" value="ivan">Iván</option>
            <option name="counselor" id="counselor" value="miguel">Miguel</option>
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
          <input type="text" name="name" id="name" autoComplete="off"  placeholder='Ej.: MariCarmen' value={newAda.name} onChange={handleNewAda}/>
          <label htmlFor="counselor">Tutora:</label>
          <input type="text" name="counselor" id="counselor" autoComplete="off"  placeholder='Ej.: Yanelis' value={newAda.counselor} onChange={handleNewAda}/>
          <label htmlFor="speciality">Especialidad:</label>
          <input type="text" name="speciality" id="speciality" autoComplete="off"  placeholder='Ej.: Python' value={newAda.speciality} onChange={handleNewAda}/>
          <input type="submitt" value="Añadir una nueva Adalaber" onClick={handleNewAdaClick}/>
        </form>
      </section>
    </React.Fragment>
  );
}

export default App;

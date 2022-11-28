import React from 'react';
import {useState, useEffect} from 'react';
import callToApi from '../services/apiAdalabers';
import ls from '../services/localStorage';
import '../styles/App.scss';

function App() {

  //STATE VARIABLES
  //Adalabers main list
  const [adalabersList, setAdalabersList] = useState([]);
  //New adalabers list
  const [newAdasList, setNewAdasList] = useState(ls.get('newAdasLocal',[]));
  //New adalaber object, to fill with input information
  const [newAda, setNewAda] = useState({
    id: '',
    name: '',
    counselor: '',
    speciality: '',
    social_networks: [{
      name: '',
      url: ''
    }]
  });
  //Search form object to fill with input information
  const [searchAda, setSearchAda] = useState(ls.get('searchAdaInputs',{
    name: '',
    counselor: ''
  }));

  //USE EFFECT
  useEffect(() => {
    callToApi().then((response) => {
      if(newAdasList !== undefined){
        const newList = response.concat(newAdasList);
        setAdalabersList(newList );
      }else{
        setAdalabersList(response);
      }
    })
  }, []);

  //EVENT FUNCTIONS

  //Function to create object for a new Adalaber
  const handleNewAda = (ev) => {
    if(ev.target.id === 'social_networks--name'){
      //First element in the array
      newAda.social_networks[0].name = ev.target.value;
      setNewAda({...newAda})
    }else if(ev.target.id === 'social_networks--url'){
      newAda.social_networks[0].url = ev.target.value;
      setNewAda({...newAda})
      //console.log(adalabersList[0].social_networks[0].name)
    }else{
      setNewAda({...newAda, [ev.target.id] : ev.target.value});
      if(ev.target.id === 'counselor'){
        ls.set('newCounselor', ev.target.value)
      }
    }
  };

  //Function to add a new Adalaber to the list
  const handleNewAdaClick = () => {
    if(newAda.name !== '' && newAda.counselor !== '' && newAda.speciality !== '' ){
      //Add id to each new adalaber
      newAda.id = crypto.randomUUID();
      //Include new adalaber into main list
      setAdalabersList([...adalabersList, newAda]);
      //Save in local storage
      const newAdasLocal = [...newAdasList, newAda];
      ls.set('newAdasLocal', newAdasLocal);
      console.log(newAdasLocal)
      //Add to new adas array
      setNewAdasList([...newAdasList, newAda]);
      //Empty input values
      setNewAda({
        id: '',
        name: '',
        counselor: '',
        speciality: '',
        social_networks: [{
          name: '',
          url: ''
        }]
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
      ls.set('searchAdaInputs',{...searchAda, [ev.target.id] :  ev.target.value});
      setSearchAda({...searchAda, [ev.target.id] : ev.target.value});
  }

  //RENDER FUNCTIONS
  const renderAdalabers = () =>{
    return adalabersList
    .filter((eachAda) => eachAda.name.toLowerCase().includes(searchAda.name.toLowerCase()))
    .filter((eachAda) => eachAda.counselor.toLowerCase().includes(searchAda.counselor.toLowerCase()))
    .map((eachAda)=>{
        return(
          <tr key={eachAda.id} id={eachAda.id}>
            <td className='table__body--cell'>{eachAda.name}</td>
            <td className='table__body--cell'>{eachAda.counselor}</td>
            <td className='table__body--cell'>{eachAda.speciality}</td>
            <td className='table__body--cell'>
              {eachAda.social_networks.map((eachSocial, index) => {
                  return <span key={index}><a className='table__body--cell--social' href={eachSocial.url} target="_blank">{eachSocial.name}</a> </span>;
              })}
            </td>
          </tr>
        )
      }) 
  };

  //RETURN
  return (
    <React.Fragment>
      {/*Header*/}
      <header>
        <h1 className='header__title'>Adalabers</h1>
      </header>
      {/*Main*/}
      <section>
        <form className='searchForm' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" id="name" autoComplete="off" placeholder='Ej.: MariCarmen' value={searchAda.name} onChange={handleSearchAda}/>
          </div>
          <div>
            <label htmlFor="">Escoge una tutora:</label>
            <select name="counselor" id="counselor" value={searchAda.counselor} onChange={handleSearchAda}>
              <option name="counselor" id="counselor" value="">Escoge una opción</option>
              <option name="counselor" id="counselor" value="yanelis">Yanelis</option>
              <option name="counselor" id="counselor" value="dayana">Dayana</option>
              <option name="counselor" id="counselor" value="iván">Iván</option>
              <option name="counselor" id="counselor" value="miguel">Miguel</option>
            </select>
          </div>
        </form>
        <table className='table'>
          <thead className='table__head'>
            <tr>
              <td className='table__head--cell'>Nombre</td>
              <td className='table__head--cell'>Tutora</td>
              <td className='table__head--cell'>Especialidad</td>
              <td className='table__head--cell'>Redes</td>
            </tr>
          </thead>
          <tbody className='table__body'>
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
          <fieldset>
            <legend>Redes</legend>
              <label htmlFor="social_networks">Red:</label>
              <input type="text" name="social_networks--name" id="social_networks--name" autoComplete="off"  placeholder='Ej.: Github' value={newAda.social_networks[0].name} onChange={handleNewAda}/>
              <label htmlFor="speciality">URL:</label>
              <input type="text" name="social_networks--url" id="social_networks--url" autoComplete="off"  placeholder='Ej.: https://github.com/username' value={newAda.social_networks[0].url} onChange={handleNewAda}/>
          </fieldset>
          <input type="submitt" value="Añadir una nueva Adalaber" onClick={handleNewAdaClick}/>
        </form>
      </section>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import { useState, useEffect } from 'react';
//services
import callToApi from '../services/apiAdalabers';
import ls from '../services/localStorage';
//components
import Header from './Header';
import Filters from './Filters';
import Table from './Table';
//styles
import '../styles/App.scss';
import AddForm from './AddForm';


function App() {

  //STATE VARIABLES
  //Adalabers main list
  const [adalabersList, setAdalabersList] = useState([]);
  //New adalabers list
  const [newAdasList, setNewAdasList] = useState(ls.get('newAdasLocal', []));
  //New adalaber object, to fill with input information
  const [newAda, setNewAda] = useState({
    id: '',
    name: '',
    counselor: '',
    speciality: '',
    social_networks: [
      { name: '', url: '' },
      { name: '', url: '' },
      { name: '', url: '' }
    ]
  });
  //Search form object to fill with input information
  const [searchAda, setSearchAda] = useState(ls.get('searchAdaInputs', {
    name: '',
    counselor: ''
  }));
  //Flexible select so that user can add new counselors
  const [selectOptions, setSelectOptions] = useState(ls.get('selectLocal', [
    { name: 'Escoge una opción', value: '' },
    { name: 'Yanelis', value: 'yanelis' },
    { name: 'Dayana', value: 'dayana' },
    { name: 'Iván', value: 'iván' },
    { name: 'Miguel', value: 'miguel' }
  ]));


  //USE EFFECT
  useEffect(() => {
    callToApi().then((response) => {
      setAdalabersList(response)
    })
  }, []);


  //EVENT FUNCTIONS

  //Function to create object for a new Adalaber
  const handleNewAda = (id, value) => {
    if (id === 'github' && value !== '') {
      //First element in the array
      newAda.social_networks[0].name = 'GitHub';
      newAda.social_networks[0].url = value;
      setNewAda({ ...newAda })
    } else if (id === 'linkedin' && value !== '') {
      //Second element in the array
      newAda.social_networks[1].name = 'LinkedIn';
      newAda.social_networks[1].url = value;
      setNewAda({ ...newAda })
    } else if (id === 'twitter' && value !== '') {
      //Third element in the array
      newAda.social_networks[2].name = 'Twitter';
      newAda.social_networks[2].url = value;
      setNewAda({ ...newAda })
    } else {
      //Other object properties
      setNewAda({ ...newAda, [id]: value });
      //Save in local new counselors added by user
      if (id === 'counselor') {
        ls.set('newCounselor', value)
      }
    }
  };

  //Function to add a new Adalaber to the list
  const handleNewAdaClick = () => {
    if (newAda.name !== '' && newAda.counselor !== '' && newAda.speciality !== '') {
      //Add id to each new adalaber
      newAda.id = crypto.randomUUID();
      //Save in local storage
      const newAdasLocal = [...newAdasList, newAda];
      ls.set('newAdasLocal', newAdasLocal);
      //Add to new adas array
      setNewAdasList([...newAdasList, newAda]);
      //Add new counselor to select 
      let newSelect = { name: newAda.counselor, value: newAda.counselor };
      ls.set('selectLocal', [...selectOptions, newSelect]);
      setSelectOptions([...selectOptions, newSelect]);
      //Empty input values
      setNewAda({
        id: '',
        name: '',
        counselor: '',
        speciality: '',
        social_networks: [
          { name: '', url: '' },
          { name: '', url: '' },
          { name: '', url: '' }
        ]
      });
    } else {
      //Error message
      alert('Debes rellenar todos los valores.')
    }
  }

  //Function for search filter
  const handleSearchAda = (id, value) => {
    ls.set('searchAdaInputs', { ...searchAda, [id]: value });
    setSearchAda({ ...searchAda, [id]: value });
  }

  //Delete new adalabers
  const handleClickDelete = (id) => {
    //Find index of selected element
    const selectedAdaIndex = newAdasList.findIndex((eachAda) => id === eachAda.id);
    //Object responding to selected element
    const selectedElem = newAdasList[selectedAdaIndex];
    //Delete counselor from select
    if (selectedElem.counselor !== 'Yanelis' && selectedElem.counselor !== 'Dayana' && selectedElem.counselor !== 'Iván' && selectedElem.counselor !== 'Miguel') {
      const selectIndex = selectOptions.findIndex((eachSelect) => selectedElem.counselor === eachSelect.counselor);
      selectOptions.splice(selectIndex, 1);
      //Save in local storage
      ls.set('selectLocal', selectOptions);
      //Update array
      setSelectOptions([...selectOptions]);
    }
    //Delete from original array selected element
    newAdasList.splice(selectedAdaIndex, 1);
    //Save in local storage latest array
    ls.set('newAdasLocal', newAdasList);
    //Update latest array
    setNewAdasList([...newAdasList]);
  }

  //Reset button
  const handleClickReset = () => {
    //Clear input
    setSearchAda({
      name: '',
      counselor: ''
    });
    //Clear local storage for inputs
    ls.set('searchAdaInputs', {
      name: '',
      counselor: ''
    });
    //Clear add form
    setNewAda({
      id: '',
      name: '',
      counselor: '',
      speciality: '',
      social_networks: [
        { name: '', url: '' },
        { name: '', url: '' },
        { name: '', url: '' }
      ]
    });
  }


  //RENDER FUNCTIONS
  //Adalabers list
  const filteredAdalabers = () => {
    return adalabersList
      .filter((eachAda) => eachAda.name.toLowerCase().includes(searchAda.name.toLowerCase()))
      .filter((eachAda) => eachAda.counselor.toLowerCase().includes(searchAda.counselor.toLowerCase()))
  };

  //New adalabers list, option to delete them from local storage
  const filteredNewAdalabers = () => {
    return newAdasList
      .filter((eachAda) => eachAda.name.toLowerCase().includes(searchAda.name.toLowerCase()))
      .filter((eachAda) => eachAda.counselor.toLowerCase().includes(searchAda.counselor.toLowerCase()))
  };


  //RETURN
  return (
    <>
      <Header />
      <main>
        <Filters searchAda={searchAda} handleSearchAda={handleSearchAda} selectOptions={selectOptions} handleClickReset ={handleClickReset}/>
        <Table adalabersList={filteredAdalabers()} newAdasList={filteredNewAdalabers()} handleClickDelete={handleClickDelete} />
        <AddForm newAda={newAda} handleNewAda={handleNewAda} handleNewAdaClick={handleNewAdaClick} />
      </main>
    </>
  );
}

export default App;

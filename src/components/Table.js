function Table(props) {

  //EVENT FUNCTIONS
  //Delete button
  const handleClickDelete = (ev) => {
    props.handleClickDelete(ev.target.id);
  }

  //RENDER FUNCTIONS
  //Render adalabers list from API call
  const renderAdalabers = () =>{
    return props.adalabersList
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
  //New adalabers list, option to delete them from local storage
  const renderNewAdalabers = () =>{
    return props.newAdasList
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
            <td className='table__body--cell'><i id={eachAda.id} onClick={handleClickDelete} class="fa-solid fa-trash"></i></td>
          </tr>
        )
      }) 
  }; 
  

  //RETURN
  return (
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
      {renderNewAdalabers()}
    </tbody>
  </table>
    );
}

export default Table;
//styles
import '../styles/components/Table.scss';


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
                  if(eachSocial.name === 'GitHub'){
                    return  <span key={index}><a className='table__body--cell--social' href={eachSocial.url} target="_blank"><i className="fa-brands fa-github-alt"></i></a> </span>;
                  }else if(eachSocial.name === 'LinkedIn'){
                    return  <span key={index}><a className='table__body--cell--social' href={eachSocial.url} target="_blank"><i className="fa-brands fa-linkedin-in"></i></a> </span>;
                  }else if(eachSocial.name === 'Twitter'){
                    return <span key={index}><a className='table__body--cell--social' href={eachSocial.url} target="_blank"><i className="fa-brands fa-twitter"></i></a> </span>;
                  }else{
                    return null;
                  }
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
          <tr key={eachAda.id} id={eachAda.id} className='table__head--row'>
            <td className='table__body--cell'><i id={eachAda.id} onClick={handleClickDelete} className="fa-solid fa-xmark"></i> {eachAda.name}</td>
            <td className='table__body--cell'>{eachAda.counselor}</td>
            <td className='table__body--cell'>{eachAda.speciality}</td>
            <td className='table__body--cell'>
              {eachAda.social_networks.map((eachSocial, index) => {
                  if(eachSocial.name === 'GitHub'){
                    return  <span key={index}><a className='table__body--cell--social' href={eachSocial.url} target="_blank"><i className="fa-brands fa-github-alt"></i></a> </span>;
                  }else if(eachSocial.name === 'LinkedIn'){
                    return  <span key={index}><a className='table__body--cell--social' href={eachSocial.url} target="_blank"><i className="fa-brands fa-linkedin-in"></i></a> </span>;
                  }else if(eachSocial.name === 'Twitter'){
                    return <span key={index}><a className='table__body--cell--social' href={eachSocial.url} target="_blank"><i className="fa-brands fa-twitter"></i></a> </span>;
                  }else{
                    return null;
                  }
              })}
            </td>
          </tr>
        )
      }) 
  }; 
  

  //RETURN
  return (
    <section>
      <table className='table'>
      <thead className='table__head'>
        <tr>
          <td className='table__head--cell'>Name</td>
          <td className='table__head--cell'>Counselor</td>
          <td className='table__head--cell'>Speciality</td>
          <td className='table__head--cell'>Network</td>
        </tr>
      </thead>
      <tbody className='table__body'>
        {renderAdalabers()}
        {renderNewAdalabers()}
      </tbody>
        </table>
    </section>
    );
}

export default Table;
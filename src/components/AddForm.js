//styles
import '../styles/components/AddForm.scss';

function AddForm(props) {
  
  //EVENT FUNCTIONS
  //Submit form
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }
  //Add new ada click
  const handleNewAda = (ev)=> {
    props.handleNewAda(ev.target.id, ev.target.value);
  }
  //Close modal click
  const handleClickClose = () =>{
    props.isCollapsed();
  }

  //RETURN
  return (
    <section className={`addform ${props.collapsed}`}>
    <form className='addform__form' onSubmit={handleSubmit}>
          <div className='addform__content'>
            <h2 className='addform__title'>New Adalaber</h2>
            <button className="addform__btn" onClick={handleClickClose}><i className="addform__btn--icon fa-solid fa-xmark"></i></button>
          </div>
          <div className='addform__content'>
            <label htmlFor="name" className='addform__label'>Name</label>
            <input type="text" name="name" id="name" autoComplete="off"  placeholder='e.g. MariCarmen' className='addform__input' value={props.newAda.name} onChange={handleNewAda}/>
          </div>
          <div className='addform__content'>
            <label htmlFor="counselor" className='addform__label'>Counselor</label>
            <input type="text" name="counselor" id="counselor" autoComplete="off"  placeholder='e.g. Yanelis' className='addform__input' value={props.newAda.counselor} onChange={handleNewAda}/>
          </div>
          <div className='addform__content'>
            <label htmlFor="speciality" className='addform__label'>Speciality</label>
            <input type="text" name="speciality" id="speciality" autoComplete="off"  placeholder='e.g. Python' className='addform__input' value={props.newAda.speciality} onChange={handleNewAda}/>
          </div>
          <fieldset className='addform__network'>
            <legend className='addform__network--legend'>Networks</legend>
              <div className='addform__content'>
                <label htmlFor="github" className='addform__label'>Github</label>
                <input type="text" name="github" id="github" autoComplete="off"  placeholder='e.g. https://github.com/username' className='addform__input' value={props.newAda.social_networks[0].url} onChange={handleNewAda}/>
              </div>
              <div className='addform__content'>
                <label htmlFor="linkedin" className='addform__label'>Linkedin</label>
                <input type="text" name="linkedin" id="linkedin" autoComplete="off"  placeholder='e.g. https://linkedin.com/username' className='addform__input' value={props.newAda.social_networks[1].url} onChange={handleNewAda}/>
              </div>
              <div className='addform__content'>
                <label htmlFor="twitter" className='addform__label'>Twitter</label>
                <input type="text" name="twitter" id="twitter" autoComplete="off"  placeholder='e.g. https://twitter.com/username' className='addform__input' value={props.newAda.social_networks[2].url} onChange={handleNewAda}/>
              </div>
          </fieldset>
          <p className={`addform__errorMsg ${props.collapsed}`}>{props.errorMsg}</p>
          <button type="submit" className='addform__btn' onClick={props.handleNewAdaClick}>
            <i className="fa-solid fa-circle-plus"></i>
          </button>
        </form>
        </section>
    );
}

export default AddForm;
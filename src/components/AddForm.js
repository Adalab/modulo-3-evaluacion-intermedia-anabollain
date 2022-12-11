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

  //RETURN
  return (
    <section>
    <form onSubmit={handleSubmit}>
          <h2>Añadir una Adalaber</h2>
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" id="name" autoComplete="off"  placeholder='Ej.: MariCarmen' value={props.newAda.name} onChange={handleNewAda}/>
          <label htmlFor="counselor">Tutora:</label>
          <input type="text" name="counselor" id="counselor" autoComplete="off"  placeholder='Ej.: Yanelis' value={props.newAda.counselor} onChange={handleNewAda}/>
          <label htmlFor="speciality">Especialidad:</label>
          <input type="text" name="speciality" id="speciality" autoComplete="off"  placeholder='Ej.: Python' value={props.newAda.speciality} onChange={handleNewAda}/>
          <fieldset>
            <legend>Redes</legend>
              <div>
                <label htmlFor="github">Github:</label>
                <input type="text" name="github" id="github" autoComplete="off"  placeholder='Ej.: https://github.com/username' value={props.newAda.social_networks[0].url} onChange={handleNewAda}/>
              </div>
              <div>
                <label htmlFor="linkedin">Linkedin:</label>
                <input type="text" name="linkedin" id="linkedin" autoComplete="off"  placeholder='Ej.: https://linkedin.com/username' value={props.newAda.social_networks[1].url} onChange={handleNewAda}/>
              </div>
              <div>
                <label htmlFor="twitter">Twitter:</label>
                <input type="text" name="twitter" id="twitter" autoComplete="off"  placeholder='Ej.: https://twitter.com/username' value={props.newAda.social_networks[2].url} onChange={handleNewAda}/>
              </div>
          </fieldset>
          <input type="submit" value="Añadir una nueva Adalaber" onClick={props.handleNewAdaClick}/>
        </form>
        </section>
    );
}

export default AddForm;
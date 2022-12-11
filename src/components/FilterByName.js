function FilterByName(props) {

    //EVENT FUNCTIONS
    //Search input
    const handleSearchAda = (ev) => {
        props.handleSearchAda(ev.target.id, ev.target.value);
    }
    
    //RETURN
    return (
        <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" id="name" autoComplete="off" placeholder='Ej.: MariCarmen' value={props.searchAda.name} onChange={handleSearchAda} />
        </div>
    );
}

export default FilterByName;
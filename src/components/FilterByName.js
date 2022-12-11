//styles
import '../styles/components/FilterByName.scss';

function FilterByName(props) {

    //EVENT FUNCTIONS
    //Search input
    const handleSearchAda = (ev) => {
        props.handleSearchAda(ev.target.id, ev.target.value);
    }
    
    //RETURN
    return (
        <div className='searchform__text'>
            <label htmlFor="name" className='searchform__text--label'>Name</label>
            <input type="text" name="name" id="name" autoComplete="off" placeholder='e.g. MariCarmen' className='searchform__text--input' value={props.searchAda.name} onChange={handleSearchAda} />
        </div>
    );
}

export default FilterByName;
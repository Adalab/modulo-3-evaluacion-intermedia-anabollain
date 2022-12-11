//styles
import '../styles/components/FilterByCounselor.scss';

function FilterByCounselor(props) {

    //EVENT FUNCTIONS
    //Search input
    const handleSearchAda = (ev) => {
        props.handleSearchAda(ev.target.id, ev.target.value);
    }

    //RENDER FUNCTIONS
    //Select options 
    const renderSelectOptions = () => {
        return props.selectOptions.map((eachOpt, index) => {
            return <option key={index} name="counselor" id="counselor" value={eachOpt.value}>{eachOpt.name}</option>
        })
    }

    //RETURN
    return (
        <div className='searchform__select'>
            <label htmlFor="" className='searchform__select--label'>Counselor</label>
            <select name="counselor" id="counselor" className='searchform__select--input' value={props.searchAda.counselor} onChange={handleSearchAda}>
                {renderSelectOptions()}
            </select>
        </div>
    );
}

export default FilterByCounselor;
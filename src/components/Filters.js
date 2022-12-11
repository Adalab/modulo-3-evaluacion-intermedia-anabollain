//components
import FilterByCounselor from './FilterByCounselor';
import FilterByName from './FilterByName';
import ResetBtn from './ResetBtn';

function Filters(props) {

  //EVENT FUNCTIONS
  //Submit form
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  //RETURN
  return (
    <section>
      <form className='searchForm' onSubmit={handleSubmit}>
        <FilterByName searchAda={props.searchAda} handleSearchAda={props.handleSearchAda} />
        <FilterByCounselor searchAda={props.searchAda} handleSearchAda={props.handleSearchAda} selectOptions={props.selectOptions}/>
        <ResetBtn handleClickReset ={props.handleClickReset}/>
      </form>
    </section>
  );
}

export default Filters;
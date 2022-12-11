import { useState } from 'react';
//components
import AddBtn from './AddBtn';
import FilterByCounselor from './FilterByCounselor';
import FilterByName from './FilterByName';
import ResetBtn from './ResetBtn';
//styles
import '../styles/components/Form.scss';

function Filters(props) {
  //STATE VARIABLES
  
  //EVENT FUNCTIONS
  //Submit form
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  //RETURN
  return (
    <section>
      <form className='searchForm' onSubmit={handleSubmit}>
        <AddBtn collapsed={props.collapsed} isCollapsed={props.isCollapsed} />
        <FilterByName searchAda={props.searchAda} handleSearchAda={props.handleSearchAda} />
        <FilterByCounselor searchAda={props.searchAda} handleSearchAda={props.handleSearchAda} selectOptions={props.selectOptions}/>
        <ResetBtn handleClickReset ={props.handleClickReset}/>
      </form>
    </section>
  );
}

export default Filters;
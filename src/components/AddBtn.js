//styles
import '../styles/components/AddBtn.scss';

function AddBtn(props) {

    

    //EVENT FUNCTIONS
    const handleSubmit = (ev) =>{
        ev.preventDefault();
    }
    
    const handleAddClick = () => {
        props.isCollapsed();
    }

    //RETURN
  return (
    <button type='submit' className='searchform__add' onSubmit={handleSubmit} onClick={handleAddClick}>Add a new adalaber</button>
    );
}


export default AddBtn;
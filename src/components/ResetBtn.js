//styles
import '../styles/components/ResetBtn.scss';

function ResetBtn(props) {

  //EVENT FUNCTIONS
  //Reset button
    const handleClickReset = () => {
        props.handleClickReset();
    }
    
  //RETURN
  return (
    <button type='reset' className='searchform__reset' onClick={handleClickReset}>Reset</button>
    );
}

export default ResetBtn;
function ResetBtn(props) {

  //EVENT FUNCTIONS
  //Reset button
    const handleClickReset = () => {
        props.handleClickReset();
    }
    
  //RETURN
  return (
    <button type='reset' onClick={handleClickReset}>Reset</button>
    );
}

export default ResetBtn;
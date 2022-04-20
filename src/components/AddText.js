import React, {useState} from 'react';
import PropTypes from 'prop-types';

AddText.propTypes = {
  
};

function AddText(props) {
  const [value, setValue] = useState('')
  function handleAdd (e){
    e.preventDefault();
   

    const formValues = {
      title: value,
    }
    onSubmit(formValues)

    setValue('')
    
  }
  return (
    <div className ="add-text">
        <input 
          type="text" 
          placeholder="What's need to be done?"
          value={value}
          onChange = {(e) => setValue(e.target.value)}

        />
        <button>ADD TASK</button>
        </div>
  );
}

export default AddText;
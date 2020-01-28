import React, { useState, useEffect } from 'react';
import { addSmurf, editSmurf } from '../actions/smurfActions';

const SmurfForm = ({ dispatch, editingSmurf, isEditing }) => {
  const [info, setInfo] = useState({
    name: '',
    age: '',
    height: ''
  });

  useEffect(() => {
    if (!isEditing) {
      setInfo({
        name: '',
        age: '',
        height: ''
      })
    } else {
      setInfo({
        name: editingSmurf.name,
        age: editingSmurf.age,
        height: editingSmurf.height
      })
    }
  }, [isEditing]);

  const handleChanges = event => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value
    })
  };
  
  const sendSmurfInfo = event => {
    event.preventDefault();
    dispatch(addSmurf(info));
    setInfo({
      name: '',
      age: '',
      height: '',
    });
  };

  const sendEdit = event => {
    event.preventDefault();
    dispatch(editSmurf({...info, id: editingSmurf.id}));
    dispatch({ type: 'SEND_EDIT'}); // reset form
  }

  return (
    <form>
      <input
        type="text"
        name="name"
        value={info.name}
        onChange={handleChanges}
        placeholder="Smurf name"
      />
      <input
        type="text"
        name="age"
        value={info.age}
        onChange={handleChanges}
        placeholder="Age"
      />
      <input
        type="text"
        name="height"
        value={info.height}
        onChange={handleChanges}
        placeholder="Height"
      />
      {!isEditing ? (<button onClick={sendSmurfInfo} >Add smurf</button>) :
      <button onClick={sendEdit} >Edit smurf</button>}

      
    </form>
  );
}

export default SmurfForm;
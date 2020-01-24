import React, { useState } from 'react';
import { addSmurf } from '../actions/smurfActions';

const SmurfForm = ({ dispatch, editId }) => {
  const [info, setInfo] = useState({
    name: '',
    age: '',
    height: ''
  });

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
      age: 0,
      height: 0,
    });
  };

  return (
    <form onSubmit={sendSmurfInfo}>
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
      <button>Add smurf</button>
    </form>
  );
}

export default SmurfForm;
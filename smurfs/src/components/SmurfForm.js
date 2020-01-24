import React, { useState } from 'react';

const SmurfForm = () => {
  const [info, setInfo] = useState({
    smurfName: '',
    height: 0
  });

  const handleChanges = event => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value
    })
  };
  
  return (
    <form>
      <input
        type="text"
        name="smurfName"
        value={info.smurfName}
        onChange={handleChanges}
        placeholder="Smurf name"
      />
      <input
        type="text"
        name="height"
        value={info.height}
        onChange={handleChanges}
        placeholder="Height"
      />
    </form>
  );
}

export default SmurfForm;
import React, {useState} from 'react';

export default function AppChild({parentToChild, childToParent}) {

  const [child, setChild] = useState();
  const [submit, setSubmit] = useState();


  function handleChange(event) {
    const value = event.target.value;
    setChild(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmit(child);
  }


  return(
    <div className='childcontainer'>
      <h1>Child Component</h1>
      <input
      onChange={handleChange}/>
      <button
      onClick={handleSubmit}>AppChild Submit</button>
      <button
      onClick={() => childToParent(submit)}>Transfer to Parent</button>
      <div className='childboxes'>
        <div className='box3'>{submit}</div>
        <div className='box4'>{parentToChild}</div>
      </div>
    </div>
  );
}

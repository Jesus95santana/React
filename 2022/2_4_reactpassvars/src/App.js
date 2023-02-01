import React, {useState} from 'react';
import AppChild from './AppChild.js'


export default function App() {

  const [parent, setParent] = useState();
  const [changed, setChanged] = useState();
  const [childTransfer, setChildTransfer] = useState();
  const [parentTransfer, setParentTransfer] = useState();


  function handleChange(event) {;
    setParent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setChanged(parent);
  }

  function parentToChild() {
    setParentTransfer(changed);
  }

  function childToParent(childData) {
    setChildTransfer(childData);
  }

  return(
    <div className='appcontainer'>
      <div className='parentcontainer'>
        <h1>Parent Component</h1>
        <input
        onChange={handleChange}/>
        <button
        onClick={handleSubmit}>App Submit</button>
        <button
        onClick={() => parentToChild()}>Transfer to Child</button>
        <div className='parentboxes'>
          <div
          className='box1'>{changed}</div>
          <div className='box2'>{childTransfer}</div>
        </div>
      </div>
      <AppChild
      parentToChild={parentTransfer}
      childToParent={childToParent}/>
    </div>
  );
}

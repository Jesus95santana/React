import React, { useState } from 'react';

export default function DataSender(dataIndex) {
const [info, setInfo] = useState();
const [showInfo, setShowInfo] = useState(false);
const [title, setTitle] = useState();

function eventUpdater(event) {
  setInfo(event.target.value);
}

function displayShow() {
  setShowInfo(true);
}
function displayHide() {
  setShowInfo(false);
}

function changeTitle() {
  setTitle(info);
  dataIndex(title);
}

  return(
    <div className='DataSender'>
      <h2>Put Information here to update Header</h2>

      <input
      type='text'
      onChange={eventUpdater}/>

      <button
      onClick={displayShow}>Show</button>

      <button
      onClick={displayHide}>Hide</button>

      <button
      onClick={changeTitle}>Update</button>

      {showInfo ? <p>{info}</p> : null}

    </div>
  );
}

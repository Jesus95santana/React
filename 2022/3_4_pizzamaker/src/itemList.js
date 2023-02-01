import React from 'react';

export default function Itemlist({aList, myFunction}) {

function handleClick(event) {
  const food = event.target.value;
  myFunction(food);
}

  return(
    <div className='Itemlist'>
      {aList.map( (food)=> (
          <button
          value={food}
          onClick={handleClick}>{food}</button>
        )
      )}
    </div>
  )
}

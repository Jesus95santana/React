import React, {useState} from 'react';

export default function Color() {
  const [color, setColor] = useState('yellow');
  const thatColor = {backgroundColor: color};
  const colorList = ['blue', 'green', 'yellow', 'red', 'purple', 'black', 'white', 'brown', 'grey', 'orange', 'pink',];


  return(
    <div className='Color'
    style={thatColor}>
      <h2>Color Container</h2>
      <p>The background color is {color}</p>
      {colorList.map(
        (colorPicked) => (
          <button
          key={colorPicked}
          onClick={()=>{setColor(colorPicked)}}>{colorPicked}</button>
        )
      )}
    </div>
  )
}

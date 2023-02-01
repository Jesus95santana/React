import React, {useState} from 'react';
import {produceItems, pantryItems} from './storedItems.js';
import Itemlist from './itemList';

export default function App() {
const [list, setList] = useState([]);

function addItem(list) {
  setList((prev)=>{
    return[list, ...prev]
  });
}

  return(
    <div className='App'>
      <h2>Grocery Cart</h2>
      <ul>
      {
        list.map(
          (shoppingList)=>(
            <li>{shoppingList}</li>
          )
        )
      }
      </ul>

      <h3>Produce</h3>
      <Itemlist aList={produceItems}
      myFunction={addItem}/>

      <h3>Pantry Items</h3>
      <Itemlist aList={pantryItems}
      myFunction={addItem}/>

    </div>
  )
}

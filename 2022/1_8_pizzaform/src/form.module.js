import React from 'react';

export class PizzaForm extends React.Component{
  render() {
    return(
      <form>

        <h2>Vegan Bread?</h2>
        <input
        type='radio'
        id='bread'
        name='pizza' />
        <label
        for='bread'>Yes</label>
        <input
        type='radio'
        id='nobread'
        name='pizza'/>
        <label
        for='nobread'>No</label><hr/>


        <h2>What type of sauce would you like?</h2>
        <input
        type='text'
        id='sauce'
        name='pizza'
        list='sauce-list' />
          <datalist
          id='sauce-list'>
            <option
            value='garlic'></option>
            <option
            value="cheesy"></option>
            <option
            value="plain"></option>
            <option
            value="bacon"></option>
            <option
            value="ranch"></option>
            <option
            value="seasalt"></option>
            <option
            value="spicy"></option>
          </datalist><hr/>

        <h2>Choose any topping combination!</h2>
        <input
        type='checkbox'
        id='onions'
        name='pizza' />
        <label
        for='onions'>Onions</label>
        <input
        type='checkbox'
        id='bellpeppers'
        name='pizza' />
        <label
        for='bwllpeppers'>Bellpeppers</label><br/>
        <input
        type='checkbox'
        id='pepperoni'
        name='pizza' />
        <label
        for='pepperoni'>Pepperoni</label>
        <input
        type='checkbox'
        id='cheese'
        name='pizza' />
        <label
        for='cheese'>Cheese</label><br/>
        <input
        type='checkbox'
        id='sausage'
        name='pizza' />
        <label
        for='sausage'>Sausage</label>
        <input
        type='checkbox'
        id='bacon'
        name='pizza' />
        <label
        for='bacon'>Bacon</label><br/>
        <input
        type='checkbox'
        id='mushroom'
        name='pizza' />
        <label
        for='mushroom'>Mushroom</label>
        <input
        type='checkbox'
        id='meatball'
        name='pizza' />
        <label
        for='meatball'>Meatball</label><hr/>

        <h2>Extra Info</h2>
        <textarea
        id='additionalinfo'
        name='pizza'
        rows='5'
        cols='25'
        placeholder='Additional Instructions'></textarea><br/>

        <input
        type='submit' />

      </form>
    );
  }
}

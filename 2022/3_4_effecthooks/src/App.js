import React from 'react';

export default function App() {
    return(
      <div className="App">
        <h2>Hello gibby</h2>
        <form>

          <label>Name
            <input type='text' id='nameInputID' name='personalInfo'/>
          </label>

          <label>Address
            <input type='text' id='addressID' name='personalInfo'/>
          </label>

          <button type='submit'>Submit</button>

        </form>
      </div>
    )
}

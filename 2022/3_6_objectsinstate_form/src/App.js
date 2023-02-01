import React, {useState} from 'react';

export default function App() {

const [formState, setFormState] = useState({});

function handleState(event) {
  const {name, value} = event.target;
  setFormState(
    (prev) => ({...prev,
    [name]: value})
  );
}


  return(
    <div className='App'>

      <form action='' method=''>

        <label>
          Name:
          <input
          type='text'
          name='name'
          value={formState.name}
          onChange={handleState}/>
        </label>

        <label>
          Phone:
          <input
          type='text'
          name='phone'
          value={formState.phone}
          onChange={handleState}/>
        </label>
        <input type='submit'/>

      </form>
    </div>
  )
}

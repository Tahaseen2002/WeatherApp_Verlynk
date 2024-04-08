import { useState } from 'react';
import './App.css';
import FormComponent from './Components/FormComponent';
import ErrorComponent from './Components/ErrorComponent'

function App() {
  const [error,setError]=useState('');
  return (
    <div className="App">
      <FormComponent  />
      {error && <ErrorComponent message={error}/>}
    </div>
  );
}

export default App;

import { useState } from 'react';
import BaseNumberInput from './BaseNumberInput';

function App() {
  const [decimal, setDecimal] = useState(0);
  const [binary, setBinary] = useState('0');

  const handleDecimalChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setDecimal(value);
      setBinary(value.toString(2));
    } else {
      setDecimal(0);
      setBinary('0');
    }
  };

  const handleBinaryChange = (e) => {
    const value = e.target.value;
    const decimalValue = parseInt(value, 2);
    if (!isNaN(decimalValue)) {
      setDecimal(decimalValue);
      setBinary(value);
    } else {
      setDecimal(0);
      setBinary('0');
    }
  };

  return (
    <div class="container mt-5">
      <h1>Convertisseur binaire :</h1>
      <div class="form-group border border-info col-6 p-3">
        <label>
          Entrez un nombre décimal : 
        </label>
        <br/>
        <BaseNumberInput value={decimal} onChange={handleDecimalChange} />
      </div>

      <h5 class="m-5">Ou bien :</h5>

      <div class="form-group border border-info col-6 p-3">
          <label>
            Entrez un nombre binaire :
          </label>
          <br/>
          <BaseNumberInput value={binary} onChange={handleBinaryChange} />
        </div>
    </div>
  );
}

export default App;

import { useState } from 'react';

function FormSubmit() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Validate if the input is not empty
    if (value === "") {
      setError('This field is required.');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      alert("Sent!")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSubmit;
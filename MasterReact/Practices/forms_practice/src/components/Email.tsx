import { useState } from "react";

// Validation logic for email format
const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

function Email() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!isEmailValid(value)) {
      setError('Invalid email format.');
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
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Email;
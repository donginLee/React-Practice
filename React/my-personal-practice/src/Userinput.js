import React, { useState } from 'react';

function Userinput() {
  const [username, setUsername] = useState('JohnDoe');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <input type="text" value={username} onChange={handleInputChange} />
      <p>Hello, {username}!</p>
    </div>
  );
} 
export default Userinput;
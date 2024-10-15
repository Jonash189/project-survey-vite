import React, { useState } from 'react';
import { Question1 } from "./Question1"



export const Survey = () => {
  const [activity, setActivity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Question1 activity={activity} setActivity={setActivity} />

        <br></br> <br></br> <br></br> <br></br>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


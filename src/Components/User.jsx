import { useState } from "react";

function User({ name }) {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <>
      <div className="user-card border-2 border-black p-4 w-64">
        <h1>Count :- {count}</h1>
        <h1>Count2 :- {count2}</h1>
        <h2>Name:- {name}</h2>
        <h2>Location:- Ashta MP</h2>
        <h2>Contact:- yaaartushaar</h2>
      </div>
    </>
  );
}

export default User;

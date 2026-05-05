import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function App() {
  const { name, setName } = useContext(UserContext);

  return (
    <div>
      <h2>User Name: {name}</h2>
      <button onClick={() => setName("Rahul")}>
        Change Name
      </button>
    </div>
  );
}

export default App;
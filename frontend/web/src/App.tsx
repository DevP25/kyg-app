import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [selectedState, setSelectedState] = useState("");
  const [data, setData] = useState<any>(null);

  const states = [
    "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
    "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
    "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
    "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
    "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
  ];

  const handleChange = async (e: { target: { value: any; }; }) => {
    const state = e.target.value;
    setSelectedState(state);

    try {
      const response = await fetch(
        `http://localhost:3000/senators?state=${state}`
      );

      const json = await response.json();
      setData(json);
    } catch(error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div>
        <h1> Select a State </h1>
        <select value={selectedState} onChange={handleChange}>
          <option value="">-- Choose a state --</option>
          {states.map((state) => (
            <option key ={state} value = {state}>
              {state}
            </option>
          ))}
        </select>

        {data && (
        <pre style={{ marginTop: "20px" }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App

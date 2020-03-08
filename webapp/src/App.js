import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <button onClick={async () => {
        const yo = await fetch("/api")
        alert(await yo.text())
        }}>Click Me</button>
    </div>
  );
}

export default App;

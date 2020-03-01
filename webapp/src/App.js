import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <button onClick={async () => {
        const yo = await fetch("/api")
        alert(await yo.text())
        }}>Click ME</button>
    </div>
  );
}

export default App;

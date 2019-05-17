import React from 'react';
import './App.css';
import EnhancedTable from './Components/Table.jsx';
import OutlinedButton from './Components/OutlinedButton.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Dashboard for Managing Users
      </header>
      <section>
        <OutlinedButton link="https://material-ui.com/demos/buttons/#outlined-buttons">Back to Casino</OutlinedButton>
      </section>
      <EnhancedTable>Back to Casino</EnhancedTable>
    </div>
  );
}

export default App;

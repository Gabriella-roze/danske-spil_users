import React from 'react';
import './App.css';
import EnhancedTable from './Components/Table.jsx';
import OutlinedButton from './Components/OutlinedButton.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Dashboard for Managing New Users<br/>
        for Danske Spil: Casino
      </header>
      <section>
        <OutlinedButton link="http://ggrdesign.com/KEA/3sem/danskespil/src/index.html">Back to Casino</OutlinedButton>
      </section>
      <EnhancedTable>Back to Casino</EnhancedTable>
      <p>* This website was created as a part of an exam project @KEA MMD programme *</p>
    </div>
  );
}

export default App;

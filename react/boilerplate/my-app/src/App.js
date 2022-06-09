import React from 'react';
import ButtonComponent from './common/ButtonComponent';
import './App.css';

function App() {
  return (
    <div className="App">
     <ButtonComponent label="save" className="red" />
     <ButtonComponent label="cancel" />
    </div>
  );
}

export const APP_NAME = 'First Web APP 123'

export default App;

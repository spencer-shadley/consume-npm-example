import React from 'react';
import { Button, Paragraph } from 'publish-npm-feztheforeigner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button text={'cheese'} />
      <Paragraph text={'pizza'} theme={'dark'}/>
    </div>
  );
}

export default App;

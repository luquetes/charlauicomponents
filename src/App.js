import React from 'react';
import './App.css';

import Section from './components/Section/Section';

import {AgroButton} from 'agrofy-ui-components';

function App() {
  return (
    <>
      <header><h1>Agrofy UI Components</h1></header>
      <main>
        <Section>
          <AgroButton label="Hola soy un boton" />
        </Section>
      </main>
    </>
  );
}

export default App;

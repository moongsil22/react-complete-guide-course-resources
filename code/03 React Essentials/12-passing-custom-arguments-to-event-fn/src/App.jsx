// import { useState, Fragment } from 'react' //Fragment는 예전방식이다.
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
function App() {




  console.log('APP COMPONENT EXCUTING');
  return (
    //Fragment 대신  empty 사용
    <> 
      <Header />
      <main>
        <CoreConcepts />
        <Examples />

      </main>
    </>

    
  );
}

export default App;

import React from "react";
import Routes from './Routes';
import UseAppContextProvider from '../components/Context/context';

function App() {
    return(
      <UseAppContextProvider>
        <Routes />
      </UseAppContextProvider>
    )
}

export default App;

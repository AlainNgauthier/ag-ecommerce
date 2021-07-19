import React, { createContext, useState } from 'react';

export const UseAppContext = createContext(null);

const UseAppContextProvider = props => {
    const [username, setUsername] = useState('');

    const handleName = name => {
        setUsername(name);
    }

    return(
        <UseAppContext.Provider value={{handleName, username}}>
            {props.children}
        </UseAppContext.Provider>
    )
}

export default UseAppContextProvider;
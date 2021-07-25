import React, { createContext, useState } from 'react';

export const UseAppContext = createContext(null);

const UseAppContextProvider = props => {
    const [username, setUsername] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleName = name => {
        setUsername(name);
    }

    const toogle = () => {
        setIsOpen(!isOpen);
    }

    return(
        <UseAppContext.Provider value={{ handleName, username, isOpen, toogle }} >
            {props.children}
        </UseAppContext.Provider>
    )
}

export default UseAppContextProvider;
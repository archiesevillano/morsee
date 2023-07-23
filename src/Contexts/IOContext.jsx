import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export const IOContext = React.createContext();

const IO = ({ children }) => {

    const [input, setInput] = useState("");
    const [converted, setConverted] = useState("");

    const handleConvertToMorse = async () => {
        const response = await Axios.get();
        setConverted(response.data);
    }

    const handleConvertToNormal = async () => {
        const response = await Axios.get();
        setConverted(response.data);
    }

    const handleConvert = (type) => {
        switch (type) {
            case "morse":
                // convert input to morse code
                handleConvertToMorse();
                break;
            case "normal":
                // convert the input to normal letters
                handleConvertToNormal();
                break;
            default:
                handleConvertToMorse();
        }
    }

    return (
        <IOContext.Provider value={{ input, setInput, handleConvert, converted }}>
            {children}
        </IOContext.Provider>
    );
}

export default IO;
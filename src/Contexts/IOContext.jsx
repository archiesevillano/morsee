import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export const IOContext = React.createContext();

const IO = ({ children }) => {

    const [conversionType, setConversionType] = useState("morse");
    const [input, setInput] = useState("");
    const [converted, setConverted] = useState("");

    useEffect(() => {
        handleConvert();
    }, [input]);

    const handleConvertToMorse = async () => {
        const response = await Axios.post(`${import.meta.env.VITE_SERVER}/translate`, { input, type: "morse" });
        setConverted(response.data);
    }

    const handleConvertToNormal = async () => {
        const response = await Axios.post(`${import.meta.env.VITE_SERVER}/translate`, { input, type: "normal" });
        setConverted(response.data);
    }

    const handleSwitch = (type) => {
        setConversionType(type);
    }

    const handleConvert = () => {
        switch (conversionType) {
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
        <IOContext.Provider value={{ input, setInput, handleConvert, converted, handleSwitch }}>
            {children}
        </IOContext.Provider>
    );
}

export default IO;
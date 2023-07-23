import { IOContext } from "../../Contexts/IOContext";
import "./Switcher.scss";
import { useContext, useEffect, useState } from 'react';
const Switcher = () => {

    //returns true if the translator translates from normal text to morse code
    const [isSwitched, switchTo] = useState(true);
    const translate = ["Regular Text", "Morse Code"];

    const { handleSwitch } = useContext(IOContext);

    const handleChangeTranslate = () => {
        switchTo(prev => !prev);
    }

    useEffect(() => {
        if (isSwitched) {
            handleSwitch("morse");
        }
        else {
            handleSwitch("normal");
        }
    }, [isSwitched]);

    return (
        <div className="switcher">
            <div className="switcher__translates">
                <p>{translate[!isSwitched ? 1 : 0]}</p>
                <button className="switcher__button" onClick={handleChangeTranslate}>
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                </button>
                <p>{translate[isSwitched ? 1 : 0]}</p>
            </div>
        </div>
    );
}

export default Switcher;
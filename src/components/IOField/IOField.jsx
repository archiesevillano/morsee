import { IOContext } from "../../Contexts/IOContext";
import "./IOField.scss";
import { useRef, useContext, useEffect } from 'react';

const IOField = ({ heading, type, className }) => {

    const { input, setInput, converted } = useContext(IOContext);
    const inputRef = useRef(null);

    useEffect(() => {
        // assigns new value to the textbox whenever there's a new conversion
        if (type === "output") {
            inputRef.current.value = converted;
        }
    }, [converted]);

    // copies the input inside the textbox
    const handleCopy = () => {
        navigator.clipboard.writeText(type === "input" ? input : converted);
    }

    // paste the text content from clipboard to textbox
    const handlePaste = async () => {
        const pasteContent = await navigator.clipboard.readText();
        inputRef.current.value = pasteContent;
    }

    // deletes all the input inside the textbox
    const handleClear = () => {
        inputRef.current.value = "";
    }

    return (
        <div className={`IOField ${className} ${type === "output" ? "readOnly" : ""}`}>
            <h2>{heading}<span className="readOnly">Read only</span></h2>
            <textarea ref={inputRef} onChange={e => setInput(e.target.value)} className="IOField__field" style={{ pointerEvents: type === "output" ? "none" : "", fontFamily: type === "input" ? "'Roboto', sans-serif" : "courier" }} />
            <div className="IOField__btnGroup">
                <button className="IOField__clearBtn" onClick={handleClear}>
                    <i className="fa-solid fa-trash"></i>
                </button>
                <button className="IOField__pasteBtn" onClick={handlePaste}>
                    <i className="fa-solid fa-paste"></i>
                </button>
                <button className="IOField__copyBtn" onClick={handleCopy}>
                    <i className="fa-solid fa-clone"></i>
                </button>
            </div>
        </div>
    );
}

export default IOField;
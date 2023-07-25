import "./SampleField.scss";
import { useState, useEffect } from 'react';

const SampleField = ({ text }) => {

    // returns true if the code template has been copied
    const [isCopied, copied] = useState(false);

    useEffect(() => {
        if (isCopied) {
            // sets the copied state to false(not copied state) after 10 seconnds
            setTimeout(() => {
                copied(false);
            }, [10000]);
        }
    }, [isCopied]);

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then((result) => {
                //if the input is successfully copied then the tooltip will display 'Copied' instead of 'Copy'
                copied(true);
            }).catch((err) => {
                console.warn(err);
            });
    }

    return (
        <div className="template">
            <input type="text" className="template__text" readOnly value={text} />
            <button className="template__copyBtn" onClick={handleCopy}>
                <span className="template__copyBtn__tooltip">{isCopied ? "Copied" : "Copy"}</span>
                {
                    isCopied ? <i className="fa-solid fa-check-double"></i> : <i className="fa-solid fa-copy"></i>
                }
            </button>
        </div>
    );
}

export default SampleField;
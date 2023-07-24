import "./SampleBox.scss";
import { useState, useEffect } from 'react';

const SampleBox = ({ data }) => {
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
        navigator.clipboard.writeText(data)
            .then((result) => {
                //if the input is successfully copied then the tooltip will display 'Copied' instead of 'Copy'
                copied(true);
            }).catch((err) => {
                console.warn(err);
            });
    }

    return (
        <div className="sampleBox">
            <button className="sampleBox__copyBtn" onClick={handleCopy}>
                <span className="sampleBox__copyBtn__tooltip">{isCopied ? "Copied" : "Copy"}</span>
                {
                    isCopied ? <i className="fa-solid fa-check-double"></i> : <i className="fa-solid fa-copy"></i>
                }
            </button>
            <code>{data}</code>
        </div>
    );
}
export default SampleBox;
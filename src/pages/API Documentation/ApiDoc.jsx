import { Link, NavLink } from "react-router-dom";
import "./ApiDoc.scss";
import { useEffect, useState } from "react";
const ApiDoc = () => {

    const pointers = [
        {
            name: "Introduction",
            hash: "#introduction"
        },
        {
            name: "Sample Template",
            hash: "#template"
        },
        {
            name: "Input Types",
            hash: "#types"
        },
        {
            name: "Abbreviations",
            hash: "#abbr"
        },
        {
            name: "Letters",
            hash: "#letters"
        },
        {
            name: "Digits",
            hash: "#digits"
        },
        {
            name: "Punctuations",
            hash: "#punctuations"
        },
        {
            name: "Accented Letters",
            hash: "#accLet"
        },
        {
            name: "Prosign",
            hash: "#prosign"
        },
        {
            name: "Qcode",
            hash: "#qcode"
        },
    ]

    const templateCode = `${import.meta.env.VITE_SERVER}/[TYPE]/[DATA]`;

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
        navigator.clipboard.writeText(templateCode)
            .then((result) => {
                //if the input is successfully copied then the tooltip will display 'Copied' instead of 'Copy'
                copied(true);
            }).catch((err) => {
                console.warn(err);
            });
    }

    return (
        <div className="apidoc">
            <div className="apidoc_left">
                <h1 className="apidoc__heading" id="introduction">API Documentation</h1>
                <p>
                    Unlock the potential of our API at absolutely no charge! Harness the power of the Morsee Free API to build your very own Morse Code Decoder or Translator Website. Dive into the details and explore the capabilities of our API through our comprehensive documentation. Take advantage of this fantastic opportunity to bring your creative ideas to life without any financial burden. Let your imagination soar and discover the endless possibilities that the Morsee Free API has to offer!
                </p>
                <div className="apidoc__left__sampleTypes" id="template">
                    <p>
                        Here's the sample template that you can use:
                    </p>
                    <div className="template">
                        <code>{templateCode}</code>
                        <button className="template__copyBtn" onClick={handleCopy}>
                            <span className="template__copyBtn__tooltip">{isCopied ? "Copied" : "Copy"}</span>
                            <i className="fa-solid fa-copy"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="apidoc_right">
                <table className="apidoc__table">
                    <thead>
                        <th colSpan={2}>
                            Morsee API
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="apidoc__table__icon">
                                <i className="fa-solid fa-circle-check"></i>
                            </td>
                            <td className="apidoc__table__text">
                                Easy to use
                            </td>
                        </tr>
                        <tr>
                            <td className="apidoc__table__icon">
                                <i className="fa-solid fa-circle-check"></i>
                            </td>
                            <td className="apidoc__table__text">
                                No API Key
                            </td>
                        </tr>
                        <tr>
                            <td className="apidoc__table__icon">
                                <i className="fa-solid fa-circle-check"></i>
                            </td>
                            <td className="apidoc__table__text">
                                Free for any use
                            </td>
                        </tr>
                        <tr>
                            <td className="apidoc__table__icon">
                                <i className="fa-solid fa-circle-check"></i>
                            </td>
                            <td className="apidoc__table__text">
                                No Capping
                            </td>
                        </tr>
                        <tr>
                            <td className="apidoc__table__icon">
                                <i className="fa-solid fa-circle-check"></i>
                            </td>
                            <td className="apidoc__table__text">
                                No Registration is required
                            </td>
                        </tr>
                    </tbody>
                    <tbody>

                    </tbody>
                </table>

                <ul className="apidoc_right__list">
                    {pointers.map(lnk => <li key={lnk.hash}><NavLink className={`hashlink ${({ isActive }) => isActive ? "active" : ""}`} to={lnk.hash}>{lnk.name}</NavLink></li>)}
                </ul>
            </div>
        </div>
    );
}

export default ApiDoc;
import { Link, NavLink } from "react-router-dom";
import "./ApiDoc.scss";
import { useEffect, useState } from "react";
import SampleField from "../../components/SampleField/SampleField";
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
                    <SampleField text={templateCode} />
                    <p>The provided sample above shows the template for requesting a particular data and its type from the server</p>
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
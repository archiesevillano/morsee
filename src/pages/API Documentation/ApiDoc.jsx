import { Link, NavLink } from "react-router-dom";
import "./ApiDoc.scss";
import { useEffect, useState } from "react";
import SampleField from "../../components/SampleField/SampleField";
import SampleBox from "../../components/SampleBox/SampleBox";
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

    const sampleResponse1 = `[{"letter":"A","morse":".-"},{"letter":"B","morse":"-..."},{"letter":"C","morse":"-.-."},{"letter":"D","morse":"-.."},{"letter":"E","morse":"."},{"letter":"F","morse":"..-."},{"letter":"G","morse":"--."},{"letter":"H","morse":"...."},{"letter":"I","morse":".."},{"letter":"J","morse":".---"},{"letter":"K","morse":"-.-"},{"letter":"L","morse":".-.."},{"letter":"M","morse":"--"},{"letter":"N","morse":"-."},{"letter":"O","morse":"---"},{"letter":"P","morse":".--."},{"letter":"Q","morse":"--.-"},{"letter":"R","morse":".-."},{"letter":"S","morse":"..."},{"letter":"T","morse":"-"},{"letter":"U","morse":"..-"},{"letter":"V","morse":"...-"},{"letter":"W","morse":".--"},{"letter":"X","morse":"-..-"},{"letter":"Y","morse":"-.--"},{"letter":"Z","morse":"--.."}]`;

    return (
        <div className="apidoc">
            <div className="apidoc_left">
                <h1 className="apidoc__heading" id="introduction">API Documentation</h1>
                <p>
                    Unlock the potential of our API at absolutely no charge! Harness the power of the Morsee Free API to build your very own Morse Code Decoder or Translator Website. Dive into the details and explore the capabilities of our API through our comprehensive documentation. Take advantage of this fantastic opportunity to bring your creative ideas to life without any financial burden. Let your imagination soar and discover the endless possibilities that the Morsee Free API has to offer!
                </p>
                <div className="apidoc__left__sampleTypes" id="template">
                    <h2 className="apidoc__heading" id="introduction">
                        Sample Template
                    </h2>
                    <p>
                        Here's the sample template that you can use:
                    </p>
                    <SampleField text={`${import.meta.env.VITE_SERVER}/[TYPE]/[DATA]`} />
                    <p>
                        The provided sample above shows the template for requesting a particular data and its type from the server
                    </p>
                    <p>
                        When requesting data from the server, you may be using <Link to={"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}>XMLHttpRequest</Link> or <Link to={"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"}>Fetch API</Link> in JavaScript. However, I suggest to use <Link to={"https://axios-http.com/"}>Axios</Link> when requesting a data from the server. If you haven't used or installed it yet in your current project, you can install it right <Link to={"https://www.npmjs.com/package//axios"}>here</Link>.
                    </p>
                    <p>
                        Here's how to use it with Axios:
                    </p>

                    <SampleField text={`await Axios.get("${import.meta.env.VITE_SERVER}/letter");`} />

                    <p>
                        The sample code above makes an asynchronous HTTP GET request to <b>{`${import.meta.env.VITE_SERVER}/letter`}</b> using Axios. If you're new to this, just make sure that your request or the code above is wrapped with Asynchronous Function.
                    </p>

                    <h3 className="apidoc__heading" id="introduction">
                        Sample Response
                    </h3>

                    <p>
                        Here's a sample response of the code above:
                    </p>
                    <SampleBox data={JSON.stringify(sampleResponse1)} />
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
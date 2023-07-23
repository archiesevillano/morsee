import IOField from "../../components/IOField/IOField";
import "./Translator.scss";

const Translator = () => {
    return (
        <div className="translator">
            <IOField heading="Input" type="input" />
            <IOField heading="Output" type="output" />
        </div>
    );
}

export default Translator;
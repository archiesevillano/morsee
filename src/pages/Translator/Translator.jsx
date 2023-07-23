import IOField from "../../components/IOField/IOField";
import Switcher from "../../components/Switcher/Switcher";
import "./Translator.scss";

const Translator = () => {
    return (
        <div className="translator">
            <Switcher />
            <IOField heading="Input" type="input" />
            <IOField heading="Output" type="output" />
        </div>
    );
}

export default Translator;
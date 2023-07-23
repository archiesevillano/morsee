import IOField from "../../components/IOField/IOField";
import Switcher from "../../components/Switcher/Switcher";
import "./Translator.scss";

const Translator = () => {
    return (
        <div className="translator">
            <Switcher />
            <IOField heading="Input" type="input" className="translator__inputField" />
            <IOField heading="Output" type="output" className="translator__outputField" />
        </div>
    );
}

export default Translator;
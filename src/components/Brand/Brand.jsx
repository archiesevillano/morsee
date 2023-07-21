import "./Brand.css";
import logo from "./../../../morsee.png";
const Brand = () => {
    return (
        <div className="brand">
            <img src={logo} alt="Morsee Logo" className="brand__image" />
        </div>
    );
}

export default Brand;
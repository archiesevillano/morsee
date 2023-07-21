import "./Brand.scss";
import logo from "./../../../morsee.png";
const Brand = (props) => {
    return (
        <div className="brand" {...props}>
            <img src={logo} alt="Morsee Logo" className="brand__image" />
            <span className="brand__text">{import.meta.env.VITE_APP_NAME}</span>
        </div>
    );
}

export default Brand;
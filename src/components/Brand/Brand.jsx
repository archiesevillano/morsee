import "./Brand.scss";
import logo from "./../../../morsee.png";
import { Link } from "react-router-dom";

const Brand = (props) => {
    return (
        <div className="brand" {...props}>
            <Link to="/" className="brand__link">
                <img src={logo} alt="Morsee Logo" className="brand__image" />
                <span className="brand__text">{import.meta.env.VITE_APP_NAME}</span>
            </Link>
        </div>
    );
}

export default Brand;
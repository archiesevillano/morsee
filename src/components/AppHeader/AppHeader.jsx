
import Brand from "../Brand/Brand";
import NavBar from "../NavBar/NavBar";
import "./AppHeader.scss";

const AppHeader = () => {

    return (
        <header className="appHeader">
            <Brand />
            <NavBar />
        </header>
    );
}

export default AppHeader;
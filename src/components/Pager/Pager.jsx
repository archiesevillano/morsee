import "./Pager.scss";
const Pager = ({ children }) => {
    return (
        <div className="pager">
            {children}
        </div>
    );
}

export default Pager;
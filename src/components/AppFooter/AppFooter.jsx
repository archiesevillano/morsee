import "./AppFooter.scss";

const AppFooter = () => {
    return (
        <footer className="appFooter">
            <p>Developed by {import.meta.env.VITE_DEVELOPER}</p>
            <p>{import.meta.env.VITE_APP_NAME} - Copyright &copy; 2023</p>
        </footer>
    );
}

export default AppFooter;
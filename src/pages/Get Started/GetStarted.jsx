import "./GetStarted.scss";
const GetStarted = () => {
    return (
        <div className="getStarted">
            <p className="getStarted__para1 p">Free Online Morse Code Translator</p>
            <h1 className="getStarted__h1">Morse Code Translate</h1>
            <p className="getStarted__para2 p">Transform your ideas into trendy Morse code and send a mysterious message to your pals.</p>
            <div className="getStarted__btnGroup">
                <div className="getStarted__btnContainer" role="button">
                    <div className="getStarted__btnContainer__texts">
                        <p>Try for Free</p>
                        <p>Morse Translate</p>
                    </div>
                </div>
                <div className="getStarted__btnContainer" role="button">
                    <div className="getStarted__btnContainer__texts">
                        <p>Free and No API Key</p>
                        <p>{import.meta.env.VITE_APP_NAME} API for Free</p>
                    </div>
                </div>
            </div>
            <p className="getStarted__endPara">
                Welcome to MORSEE, your ultimate destination for all things Morse Code! We take pride in offering an exceptional Online Morse Code Translator that will cater to all your communication needs. Whether you're a beginner exploring the fascinating world of Morse Code or a seasoned developer looking for a Free Morse Code API, you've come to the right place. Our services are completely free, making it accessible to everyone without any limitations. Unlike many other APIs, we've eliminated the need for an API key and implemented no request capping, ensuring you have a seamless experience while integrating our API into your projects. So, dive in and explore the endless possibilities of Morse Code with us!
            </p>
        </div>
    );
}

export default GetStarted;
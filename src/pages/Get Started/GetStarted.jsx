import { useNavigate } from "react-router-dom";
import "./GetStarted.scss";
const GetStarted = () => {

    const navTo = useNavigate();

    // Redirects the user to Morsee Morse Code Translator
    const handleRedirectToTranslate = () => {
        navTo("/translator");
    }

    // redirects the user to API Documentation Page
    const handleRedirectToAPI = () => {
        navTo("/api-documentation");
    }

    return (
        <div className="getStarted">
            <p className="getStarted__para1 p">Free Online Morse Code Translator</p>
            <h1 className="getStarted__h1">Morse Code Translate</h1>
            <p className="getStarted__para2 p">Transform your ideas into trendy Morse code and send a mysterious message to your pals.</p>
            <div className="getStarted__btnGroup">
                <div className="getStarted__btnContainer--translator" onClick={handleRedirectToTranslate} role="button">
                    <div className="getStarted__btnContainer__texts">
                        <p>Try for Free</p>
                        <p>Morse Translate</p>
                    </div>
                </div>
                <div className="getStarted__btnContainer--api" onClick={handleRedirectToAPI} role="button">
                    <div className="getStarted__btnContainer__texts">
                        <p>Free and No API Key</p>
                        <p>{import.meta.env.VITE_APP_NAME} API for Free</p>
                    </div>
                </div>
            </div>
            <p className="getStarted__endPara">
                Welcome to MORSEE, your ultimate destination for all things Morse Code! We take pride in offering an exceptional Online Morse Code Translator that will cater to all your communication needs. Whether you're a beginner exploring the fascinating world of Morse Code or a seasoned developer looking for a Free Morse Code API, you've come to the right place. Our services are completely free, making it accessible to everyone without any limitations. Unlike many other APIs, we've eliminated the need for an API key and implemented no request capping, ensuring you have a seamless experience while integrating our API into your projects. So, dive in and explore the endless possibilities of Morse Code with us!
            </p>

            <div className="getStarted__unveil">
                <h1 className="getStarted__unveil__heading">
                    Unraveling the Mystery of Morse Code: A Guide to Its Origin, Purpose, and Function
                </h1>
                <p style={{ marginBottom: "50px" }}>
                    Welcome to the fascinating world of Morse Code, a communication system that has played a significant role in the history of telecommunications. In this comprehensive guide, we will delve into the origins, purpose, and inner workings of Morse Code. Whether you're a history enthusiast, a tech-savvy individual, or simply curious about this unique method of communication, let's explore the secrets behind the dots and dashes that shaped the way we communicate.
                </p>
            </div>

            <div className="getStarted__aboutMorse">

                <dl>
                    <dt>What is Morse Code?</dt>
                    <dd>
                        Morse Code is a method of encoding textual information using sequences of dots and dashes, representing letters, numbers, and special characters. It was invented in the early 1830s by Samuel Morse and his colleague Alfred Vail as a means of long-distance communication over telegraph systems. The code's simplicity and versatility made it one of the most significant developments in communication technology of its time.
                    </dd>

                    <dt>
                        Why do we use Morse Code?
                    </dt>
                    <dd>
                        The introduction of Morse Code revolutionized long-distance communication, allowing information to be transmitted rapidly and accurately across vast distances. Before the advent of modern communication technologies, such as telephones and the internet, Morse Code was the backbone of global communication, connecting people and nations like never before.<br /><br />

                        Key Reasons for Using Morse Code:

                        <ol type="a">
                            <li>
                                <strong>Efficiency:</strong> Morse Code allows for faster transmission of messages compared to writing or manually signaling letters.
                            </li>
                            <li>
                                <strong>Reliability:</strong> It proved to be a reliable method of communication, especially in challenging environments and during adverse weather conditions.
                            </li>
                            <li>
                                <strong>Versatility:</strong> Morse Code was used in various fields, including military, maritime, aviation, and railway communication.
                            </li>
                            <li>
                                <strong>Language Barrier:</strong> It transcended language barriers, making it a universal code understood by operators worldwide.
                            </li>
                        </ol>
                    </dd>

                    <dt>How does Morse Code work?</dt>
                    <dd>
                        Morse Code relies on a simple yet effective system of short and long signals, represented by dots and dashes, respectively. Each letter of the alphabet, as well as numbers and punctuation marks, is assigned a unique combination of dots and dashes. The code follows a structured pattern, making it easy to decipher with practice.<br /><br />

                        The fundamental components of Morse Code include:

                        <ol type="A">
                            <li>
                                <strong>Dots and Dashes:</strong>The shortest Morse Code symbol is the dot (.), representing a short signal, while the dash (-) denotes a longer signal.
                            </li>
                            <li>
                                <strong>Letters and Numbers:</strong>Each letter of the alphabet and every number from 0 to 9 have a specific Morse Code representation.
                            </li>
                            <li>
                                <strong>Spacing:</strong>Spaces between letters and words are essential for distinguishing individual characters and separating words in the message.
                            </li>
                        </ol>
                    </dd>
                </dl>

                <p>
                    Morse Code played a crucial role in shaping the course of human history, revolutionizing long-distance communication and connecting people across borders. While modern technology has largely replaced its practical usage, Morse Code remains an essential part of our heritage, evoking a sense of nostalgia and appreciation for the ingenious minds that paved the way for today's advanced communication systems.
                </p>

                <p style={{ marginBottom: "50px" }}>
                    As you explore the world of Morse Code further, you'll discover a fascinating communication method that has left an indelible mark on the timeline of human progress. So, whether you're a history enthusiast, a technology aficionado, or a curious learner, take a moment to appreciate the beauty and significance of Morse Code in the evolution of global communication.
                </p>
            </div>
        </div>
    );
}

export default GetStarted;
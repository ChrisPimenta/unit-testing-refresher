import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changedTextHandler = () => {
        setChangedText(true);
    };

    return (
        <div>
            <h2>Greeting</h2>
            {!changedText && <Output>Hi there, nice to meet you!</Output>}
            {changedText && <Output>Changed!</Output>}
            <button onClick={changedTextHandler}>Change Text!</button>
        </div>
    )
}

export default Greeting;
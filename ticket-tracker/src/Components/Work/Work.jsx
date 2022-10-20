import {react, useState} from "react";

const Work = (props) => {

    const [count, updateCount] = useState(0);

    const handleWork = () => {
        updateCount(count + 1);
    }

    const handleLazyness = () => {
        if (count != 0) {
            updateCount(count - 1);
        }
    }

    return (
        <>
            {count}
            <button onClick={handleLazyness}>Chill</button>
            <button onClick={handleWork}>Work</button>
        </>

    );


}

export default Work;
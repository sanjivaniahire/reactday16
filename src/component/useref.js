import { useRef } from "react";
import { Fragment } from "react";
export default function UsingRef () {
    const inputRef = useRef( );
    const handleClick = () => {
        inputRef.current.click();
    };
    return (
        <Fragment>
        <button onClick={handleClick}> Pick the File</button>
        <input type="file" ref={inputRef} style={{display: "none"}}/>
        </Fragment>
    );
}
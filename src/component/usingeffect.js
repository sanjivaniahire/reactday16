import { useRef, useEffect, useState } from "react";
import { Fragment } from "react";

export default function ImageChanger() {
  const inputRef = useRef();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    inputRef.current.addEventListener("change", () => {
      const file = inputRef.current.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    });
  }, [inputRef]);

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <Fragment>
      <div className="image-container">
        {imageUrl && <img src={"https://images.unsplash.com/photo-1619855544858-e8e275c3b31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGFsb25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"} alt="Uploaded" />}
      </div>
      <button className="image-button" onClick={handleClick}>
        {imageUrl ? "Change Image" : "Pick an Image"}
      </button>
      <input type="file" ref={inputRef} style={{ display: "none" }} />
    </Fragment>
  );
}
import React, { useState } from "react";
// import "./styles.css";
// Image Gallery Component
const ImageGallery = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [images, setImages] = useState([""]);
  const onChickHandle = () => {
    setImages((prev) => [...prev, imgUrl]);
  };
  return (
    <div className="imageGallery pt-26">
      <h1>Image Gallery Application</h1>
      {/* Input for adding a new image */}
      <div>
        <input
          type="text"
          placeholder="Enter image URL"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <button onClick={onChickHandle}>Add Image</button>
      </div>
      {/* Display images */}
      <div>
        {images.length > 1 &&
          images.map((item) => {
            return (
              item && (
                <div className="w-60 border-2">
                  <div className="absolute px-1.5 text-amber-50 py-1 rounded-2xl bg-amber-400">
                    Delete
                  </div>
                  <img src={item} alt="test" />
                </div>
              )
            );
          })}
      </div>
    </div>
  );
};

export default ImageGallery;

import { useState } from "react";
export default function LikeButton() {
  let styles = {
    color: "maroon",

  };
  let [IsLiked, setIsLiked] = useState(false);
  let [Count, setCount] = useState(0);
  let toggleButton = () => {
    setIsLiked(!IsLiked);
    {
      !IsLiked ? setCount(Count + 1) : setCount(Count);
    }
  };
  return (
    <div style={styles}>
      <p onClick={toggleButton}>
        <h3>{Count}</h3>
        {IsLiked ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}

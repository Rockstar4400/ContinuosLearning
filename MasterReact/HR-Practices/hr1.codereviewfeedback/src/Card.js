import { useState } from "react";

export function Card({title,index}) {
    const [up, setUp] = useState(0);
    const [down, setDown] = useState(0);

  function settingUp() {
    setUp(up + 1);
  }
  function settingDown() {
    setDown(down + 1);
  }

  return (
    <div className="pa-10 w-300 card">
      <h2>{title}</h2>
      <div className="flex my-30 mx-0 justify-content-around">
        <button
          onClick={settingUp}
          className="py-10 px-15"
          data-testid={`upvote-btn-${index}`}
        >
          👍 Upvote
        </button>
        <button
          onClick={settingDown}
          className="py-10 px-15 danger"
          data-testid={`downvote-btn-${index}`}
        >
          👎 Downvote
        </button>
      </div>
      <p className="my-10 mx-0" 
         data-testid={`upvote-count-${index}`}
         >
        Upvotes: <strong>{up}</strong>
      </p>
      <p className="my-10 mx-0" 
         data-testid={`downvote-count-${index}`}>
        Downvotes: <strong>{down}</strong>
      </p>
    </div>
  );
}
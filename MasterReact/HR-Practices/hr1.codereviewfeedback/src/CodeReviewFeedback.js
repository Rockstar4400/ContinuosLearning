import React from "react";
import { useState } from "react";

const FeedbackSystem = () => {

  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);

  function settingUp() {
    setUp(up + 1)
  }
  function settingDown () {
    setDown(down + 1)
  }

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        <div className="pa-10 w-300 card">
          <h2>Readability</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button onClick={settingUp} className="py-10 px-15" data-testid="upvote-btn-0">
              👍 Upvote
            </button>
            <button onClick={settingDown} className="py-10 px-15 danger" data-testid="downvote-btn-0">
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-0">
            Upvotes: <strong>{up}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-0">
            Downvotes: <strong>{down}</strong>
          </p>
        </div>
        <div className="pa-10 w-300 card">
          <h2>Readability</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button onClick={settingUp} className="py-10 px-15" data-testid="upvote-btn-0">
              👍 Upvote
            </button>
            <button onClick={settingDown} className="py-10 px-15 danger" data-testid="downvote-btn-0">
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-0">
            Upvotes: <strong>{up}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-0">
            Downvotes: <strong>{down}</strong>
          </p>
        </div>
        <div className="pa-10 w-300 card">
          <h2>Readability</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button onClick={settingUp} className="py-10 px-15" data-testid="upvote-btn-0">
              👍 Upvote
            </button>
            <button onClick={settingDown} className="py-10 px-15 danger" data-testid="downvote-btn-0">
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-0">
            Upvotes: <strong>{up}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-0">
            Downvotes: <strong>{down}</strong>
          </p>
        </div>
        <div className="pa-10 w-300 card">
          <h2>Readability</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button onClick={settingUp} className="py-10 px-15" data-testid="upvote-btn-0">
              👍 Upvote
            </button>
            <button onClick={settingDown} className="py-10 px-15 danger" data-testid="downvote-btn-0">
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-0">
            Upvotes: <strong>{up}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-0">
            Downvotes: <strong>{down}</strong>
          </p>
        </div>
        <div className="pa-10 w-300 card">
          <h2>Readability</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button onClick={settingUp} className="py-10 px-15" data-testid="upvote-btn-0">
              👍 Upvote
            </button>
            <button onClick={settingDown} className="py-10 px-15 danger" data-testid="downvote-btn-0">
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-0">
            Upvotes: <strong>{up}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-0">
            Downvotes: <strong>{down}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSystem;

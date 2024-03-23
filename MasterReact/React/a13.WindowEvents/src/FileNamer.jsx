import React, { useState, useEffect } from "react";
import "./FileNamer.css";

export default function FileNamer() {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(false);
  console.log(alert)
  useEffect(() => {
    const handleWindowClick = () => setAlert(true);
    if (alert) {
      //console.log(alert)
      window.addEventListener("click", handleWindowClick);
    } else {
      //console.log(alert)
      window.removeEventListener("click", handleWindowClick);
    }
    return () => window.removeEventListener("click", handleWindowClick);
  }, [alert, setAlert]);

  return (
    <div className="wrapper">
      <div className="preview">
        <h2>Preview: {name}.js</h2>
      </div>
      <form>
        <label>
          <p>Name:</p>
          <input
            autoComplete="off"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <div className="information-wrapper">
          
          <button
            className="information"
            onClick={() => setAlert(!alert)}
            type="button"
          >
            more information
          </button>
          {alert && (
            <div className="popup">
              <span role="img" aria-label="allowed">
                ✅
              </span>{" "}
              Alphanumeric Characters
              <br />
              <span role="img" aria-label="not allowed">
                ⛔️
              </span>{" "}
              *
            </div>
          )}
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

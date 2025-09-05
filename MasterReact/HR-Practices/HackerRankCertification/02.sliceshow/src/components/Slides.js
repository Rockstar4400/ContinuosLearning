import React, { useState } from "react";

function Slides({ slides }) {

  const [index, setIndex] = useState(0);

  function restart(){
    setIndex(0);
  }

  function next(){
    setIndex(index + 1);
  }

  function prev(){
    setIndex(index - 1);
  }

  const slide = slides[index];
  return (
    <div>
      <div id="navigation" className="text-center">
        <button 
          data-testid="button-restart"
          disabled = { index > 0 ? false : true }
          onClick={restart}
          className="small outlined">
          Restart
        </button>
        <button 
          data-testid="button-prev"
          disabled = { index > 0 ? false : true }
          onClick={prev}
          className="small">
          Prev
        </button>
        <button 
          data-testid="button-next"
          disabled = { index < slides.length - 1  ? false : true }
          onClick={next}
          className="small">
          Next
        </button>
      </div>
      { 
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slide.title}</h1>
        <p data-testid="text">{slide.text}</p>
      </div>
      }
    </div>
  );
}

export default Slides;

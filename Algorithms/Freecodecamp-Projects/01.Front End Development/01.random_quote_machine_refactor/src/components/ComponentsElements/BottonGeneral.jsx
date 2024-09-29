import React from 'react';


function BottonGeneral (props) {

  return (
    <div
      className={props.className}
    >
      {props.children}
    </div>
    )
}

export default BottonGeneral;
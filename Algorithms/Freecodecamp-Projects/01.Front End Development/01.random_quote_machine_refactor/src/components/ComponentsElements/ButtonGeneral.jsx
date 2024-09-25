import React from 'react';


function ButtonGeneral (props) {

  return (
    <div
      id={props.id}
      className={props.passclass}
    >
      {props.children}
    </div>
    )
}

export default ButtonGeneral;
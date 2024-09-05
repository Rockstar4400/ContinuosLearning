import React from 'react';


function ButtonGeneral (props) {

  return (
    <div
      id={props.id}
      className={props.passclass}
      //onClick={props.clickHandler}
    >
      {props.children}
    </div>
    )
}

export default ButtonGeneral;
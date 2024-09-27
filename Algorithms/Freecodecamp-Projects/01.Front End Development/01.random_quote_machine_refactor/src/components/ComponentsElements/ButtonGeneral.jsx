import React from 'react';


function ButtonGeneral (props) {

  return (
    <div
      className={props.className}
    >
      {props.children}
    </div>
    )
}

export default ButtonGeneral;
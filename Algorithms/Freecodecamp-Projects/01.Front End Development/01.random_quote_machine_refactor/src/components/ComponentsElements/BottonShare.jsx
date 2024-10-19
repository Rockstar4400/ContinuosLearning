import React from 'react';

const BottonShare = (props) => {
return (
        <div 
          className={props.className} 
          id={props.id}>
          {props.children}
        </div>
  );
};

export default BottonShare;
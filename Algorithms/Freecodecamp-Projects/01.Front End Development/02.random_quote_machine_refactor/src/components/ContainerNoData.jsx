import { useRef, useEffect } from "react";
import { store } from "../store";
import { useSelector } from "react-redux";

function ContainerNoData () {

const mounted = useRef();

const properties = useSelector((state) => {
        return state.quotes;
      });
    

//useEffect(() => {
  if (!mounted.current) {
      document.body.style.background = properties.background;
      document.body.style.fontFamily = properties.FontFace;
      mounted.current = true;
  } else {
    // document.body.style.background = store.getState().quotes[0].background;
    // document.body.style.fontFamily = store.getState().quotes[0].FontFace;
  }
//}),[];

return (
<div>
    <p>[No Data Loaded]</p>
</div>
)
}

export default ContainerNoData;
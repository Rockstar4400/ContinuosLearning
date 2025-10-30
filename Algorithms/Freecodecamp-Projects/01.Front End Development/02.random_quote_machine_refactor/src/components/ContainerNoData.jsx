import { useRef, useEffect } from "react";
import { store } from "../store";

function ContainerNoData () {

const mounted = useRef();
useEffect(() => {
  if (!mounted.current) {
    // document.body.style.background = "linear-gradient(to right, #9b08e9, #d5f08d)";
    // document.body.style.fontFamily = "Elephant";
    // document.body.style.background = store.getState().quotes[0].background;
    // document.body.style.fontFamily = store.getState().quotes[0].FontFace;
    mounted.current = true;
  } else {
    // document.body.style.background = store.getState().quotes[0].background;
    // document.body.style.fontFamily = store.getState().quotes[0].FontFace;
  }
}),[];

return (
<div>
    <p>[No Data Loaded]</p>
</div>
)
}

export default ContainerNoData;
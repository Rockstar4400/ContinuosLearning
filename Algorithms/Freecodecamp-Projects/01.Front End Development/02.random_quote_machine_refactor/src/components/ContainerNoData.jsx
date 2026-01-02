import { useRef } from "react";
import { useSelector } from "react-redux";

function ContainerNoData () {

const mounted = useRef();

const properties = useSelector((state) => {
        return state.quotes;
      });

if (!mounted.current) {
    //document.body.style.background = properties.background;
    //document.body.style.fontFamily = properties.FontFace;
    mounted.current = true;
}

return (
<div>
    <p>[No Data Loaded]</p>
</div>
)
}

export default ContainerNoData;
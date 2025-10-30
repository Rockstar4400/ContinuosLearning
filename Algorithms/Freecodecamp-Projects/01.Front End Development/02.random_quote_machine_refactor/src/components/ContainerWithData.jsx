import { useEffect,useRef } from "react";
import { store } from "../store";

function ContainerWithData (){
    const mounted = useRef();
    useEffect(() => {
    if (!mounted.current) {
        // document.body.style.background = "linear-gradient(to right, #9b08e9, #d5f08d)";
        // document.body.style.fontFamily = "Elephant";
        mounted.current = true;
    } else {
        // document.body.style.background = store.getState().quotes[0].background;
        // document.body.style.fontFamily = store.getState().quotes[0].FontFace;
    }
    }),[];

    return (
    <div>
        {/* {store.getState().quotes[1].data.quotes[0].quote} */}
    </div>
    )
}

export default ContainerWithData;
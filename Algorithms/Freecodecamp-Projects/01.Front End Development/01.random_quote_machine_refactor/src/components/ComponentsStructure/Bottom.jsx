import Card from "../ComponentsElements/Card";
import Logo from "../ComponentsElements/Logo";
import Image from "../ComponentsElements/Image";
import { useSelector } from "react-redux";

function BottonMiddle(props) {

  const allProps = useSelector((state) => {
    return state.quotes;
  });

    return(
    <div className={props.className}>
    <div className="column1"></div>
    <div className="imagesvg">
      <div className="svgLeft"></div>
      <Card className="Bottom--imagesvg--svgside">
        <Image 
        passclass="image" 
        house={allProps[0].data.quotes[props.random].house}
          />
      </Card>
      <div className="svgRight"></div>
    </div>
    <div className="column3"></div>
    <div className="column4"></div>
    <div className="imagesvg"></div>
    <div className="column6"></div>
    <div className="column7"></div>
    <div className="logo">
      <h4>Made with:</h4>
      <Logo className="react" />
    </div>
    <div className="column9"></div>
    </div>
    )
}

export default BottonMiddle;
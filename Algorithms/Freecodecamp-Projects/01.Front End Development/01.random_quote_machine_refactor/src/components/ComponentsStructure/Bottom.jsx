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
    <div className="Container--Bottom--column1"></div>
    <div className="Container--Bottom--imagesvg">
      <div className="svgLeft"></div>
      <Card className="Bottom--imagesvg--svgside">
        <Image 
        passclass="image" 
        house={allProps[0].data.quotes[props.random].house}
          />
      </Card>
      <div className="svgRight"></div>
    </div>
    <div className="Container--Bottom--column3"></div>
    <div className="Container--Bottom--column4"></div>
    <div className="Container--Bottom--imagesvg"></div>
    <div className="Container--Bottom--column6"></div>
    <div className="Container--Bottom--column7"></div>
    <div className="Container--Bottom--logo">
      <h1>Made with:</h1>
      <Logo className="react" />
    </div>
    <div className="Container--Bottom--column9"></div>
    </div>
    )
}

export default BottonMiddle;
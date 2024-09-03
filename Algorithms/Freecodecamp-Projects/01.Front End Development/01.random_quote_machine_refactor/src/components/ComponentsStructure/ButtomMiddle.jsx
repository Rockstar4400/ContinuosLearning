import ButtonGeneral from "../ComponentsElements/ButtonGeneral";
import Card from "../ComponentsElements/Card";
import Logo from "../ComponentsElements/Logo";
import Image from "../ComponentsElements/Image";

function ButtonMiddle() {
    
    return(<div>
        <div className="column2"></div>
          
          <div className="imagesvg">
            <div className="svgside1"></div>
            <Card className="svgside2">
              <Image 
              passclass="image" 
              //house={allProps[0].data.quotes[random].house}
               />
            </Card>
            <div className="svgside3"></div>
          </div>
          
          <div className="column3"></div>
          <div className="imagesvg"></div>
          <div className="column4"></div>
          <div className="column5"></div>
          <div className="logo">
            <h4>Made with:</h4>
            <Logo className="react" />
          </div>
          <div className="column6"></div>
    </div>)
}

export default ButtonMiddle;
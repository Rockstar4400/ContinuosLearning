import TopMiddle from "./TopMiddle";
import ButtonMiddle from "./ButtomMiddle";
import ButtonGeneral from "../ComponentsElements/ButtonGeneral";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editProps } from "../../store";

function Container () {

  const allProps = useSelector((state) => {
    return state.quotes;
  });

  const max = allProps[0].data.quotes.length - 1;
  const random = Math.floor(Math.random() * (max - 0 + 1)) + 0;

  const dispatch = useDispatch();
  const useEditMethod = () => {
    const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
    const fonts = ["Beau Rivage", "Cinzel", "Kaushan Script", "Nanum Myeongjo"];
    const fontRandom = fonts[Math.floor(Math.random() * fonts.length)];
  
    const data = {
      back: `linear-gradient(to right, ${color1}, ${color2})`,
      font: fontRandom,
    };
    
    dispatch(editProps({data}));
  };
  

  const clickHandler = () => {
    useEditMethod();
  };

  return (
    <div className="container">
          
          <div className="column1"></div>
          <TopMiddle className="topmiddle" random={random}/>
          <div className="column3"></div>
          <div className="butttonleft">
            <div className="bleft1"></div>
            <div className="butleft" onClick={clickHandler}>
              <ButtonGeneral
                passclass="button button--antheleft"
              >
                <span>
                  <i className="angle left icon big"></i>
                </span>
              </ButtonGeneral>
            </div>
            <div className="bleft2"></div>
          </div>
          
          <div className="column5"></div>
          <div className="buttonright">
            <div className="bright1"></div>
            <div className="butright" onClick={clickHandler}>
              <ButtonGeneral
                passclass="button button--antheright"
                //quotes={this.props.quotes}
              >
                <span>
                  <i className="angle right icon big"></i>
                </span>
              </ButtonGeneral>
            </div>
            <div className="bright2"></div>
          </div>
          <div className="column7"></div>
          <ButtonMiddle className="buttonmiddle" random={random}/>
          <div className="column9"></div>

    </div>
  )
}

export default Container;
import Top from "./Top";
import Bottom from './Bottom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editProps } from "../../store";
import Middle from "./Middle";

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
    <div className="Container">
          
          <div className="column1"></div>
          <Top 
          className="Container--Top" 
          random={random}
          />
          <div className="column3"></div>

          <Middle 
          className="Container--Middle"
          clickHandler={clickHandler}
          />

          <div className="column7"></div>
          <Bottom 
          className="Container--Bottom" 
          random={random}
          />
          <div className="column9"></div>

    </div>
  )
}

export default Container;
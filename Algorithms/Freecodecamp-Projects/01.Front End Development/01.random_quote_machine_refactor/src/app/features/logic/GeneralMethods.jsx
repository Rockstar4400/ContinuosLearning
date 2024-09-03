import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProps } from "../../../store";

export const useSelMethod = () => {
    const dispatch = useDispatch();

    const selectQuotes = useSelector((state) => {
        return state.quotes;
      });

    const setQuotes = (data) => {
        dispatch(setProps(data));
    };
    
    useEffect(() => {
        fetch(
          "https://gist.githubusercontent.com/Rockstar4400/7678c57b0cebc5f740973ecb7a2691d0/raw/" +
          "281b63ab43589d538a75cae2d9f9ab35e632e789/quotes.json"
        )
          .then((response) => response.json())
          .then((data) => setQuotes(data))
      }, []);

    return selectQuotes;
};

export const useEditMethod = () => {
  const dispatch = useDispatch();

  const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  const fonts = ["Beau Rivage", "Cinzel", "Kaushan Script", "Nanum Myeongjo"];
  const fontRandom = fonts[Math.floor(Math.random() * fonts.length)];

  const divStyles = {
    background: `linear-gradient(to right, ${color1}, ${color2})`,
    FontFace: fontRandom,
  };
  
  const editFeatures = (data) => {
    dispatch(editProps(data));
  };

};
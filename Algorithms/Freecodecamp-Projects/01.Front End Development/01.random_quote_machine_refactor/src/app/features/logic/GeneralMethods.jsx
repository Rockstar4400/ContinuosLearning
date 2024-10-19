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

};
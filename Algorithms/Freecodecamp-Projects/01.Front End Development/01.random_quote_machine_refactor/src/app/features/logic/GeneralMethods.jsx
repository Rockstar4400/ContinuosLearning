import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProps } from "../../../store";

export const useSelMethod = () => {
    const dispatch = useDispatch();

    const selectQuotes = useSelector((state) => {
        return state.quotes;
      });

    const setQuotes = (quote) => {
        dispatch(setProps(quote));
    };
    
    useEffect(() => {
        fetch(
          "https://gist.githubusercontent.com/Rockstar4400/" +
            "7678c57b0cebc5f740973ecb7a2691d0/raw/4cf729b3f97f292b803508dc0c2e"+
            "d57e8dd15261/" +
            "quotes.json"
        )
          .then((response) => response.json())
          .then((data) => setQuotes(data));
      }, []);

    return selectQuotes;
};
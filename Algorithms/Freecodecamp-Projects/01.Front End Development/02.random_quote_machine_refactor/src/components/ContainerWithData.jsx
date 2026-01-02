import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchQuotesData } from "../store/slices/thunk/fetchQuotes";

function ContainerWithData (){

  const dispatch = useDispatch();
  const {data, error, loading} = 
  useSelector((state) => {
        return state.quotes;
  });

  useEffect(() => {
    dispatch(fetchQuotesData());
  }, [dispatch,])
  

    if (loading) {
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error</div>
    }
    
    let render;
    for (const p in data){
        render = data[p].map((quote) => {
        return <div key={quote.id}>{quote.quote}</div>
      })
    }

    return render;
}

export default ContainerWithData;
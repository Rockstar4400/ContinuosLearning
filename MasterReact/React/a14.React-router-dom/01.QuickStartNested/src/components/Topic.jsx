import {
    useParams
  } from "react-router-dom";

function Topic() {
    let { id } = useParams();
    
    return <h3>Requested topic ID: {id}</h3>;
  }

export default Topic;
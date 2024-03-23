import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Topic from "./Topic";

function Topics() {

    return (
      <div>
        <h2>Topics</h2>
  
        <ul>
          <li>
            <Link to="topic">Topic</Link>
          </li>
        </ul>
        <Routes>
          <Route path=":id" element={ <Topic />}>
          </Route>
        </Routes>
      </div>
    );
  }

export default Topics;
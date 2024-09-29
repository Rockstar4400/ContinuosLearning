
import BottonGeneral from "../ComponentsElements/BottonGeneral";

function Middle (props) {
        return(
        <div className={props.className}>

            <div
            className="botttonleft"
            >

                <BottonGeneral className="botleft" //onClick={clickHandler}
                >
                <div className="botton botton--effect">
                <span>
                <i
                className="angle left icon big"
                ></i>
                </span>
                </div>
                </BottonGeneral>

                <div
                className="bleft1"></div>
                <div className="bleft2"></div>
            </div>

            <div className="SB"></div>

            <div className="bottonright">

                <div className="botright1"></div>
                <div className="botright2"></div>
                <div
                className="bright"
                
                >
                <BottonGeneral className="botright" //onClick={clickHandler}
                >
                <div className="botton botton--effect">
                <span>
                    <i className="angle right icon big"></i>
                </span>
                </div>
                </BottonGeneral>
            </div>
            
            </div>
        </div>
    );
}

export default Middle;

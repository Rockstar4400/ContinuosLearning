
import BottonGeneral from "../ComponentsElements/BottonGeneral";

function Middle (props) {
        return(
        <div className={props.className}>

            <div
            className="Container--Middle--left"
            >

                <BottonGeneral 
                className="Container--Middle--left--inside" 
                //onClick={clickHandler}
                >
                <div 
                className="Container--Middle--left--inside--bot 
                Container--Middle--left--inside--bot--effect">
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

            <div className="Container--Middle--right">

                <div className="botright1"></div>
                <div className="botright2"></div>
                <div
                className="bright"
                
                >
                <BottonGeneral 
                className="Container--Middle--right--inside" 
                //onClick={clickHandler}
                >
                <div 
                className="Container--Middle--right--inside--bot
                Container--Middle--right--inside--bot--effect">
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

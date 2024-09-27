
import ButtonGeneral from "../ComponentsElements/ButtonGeneral";

function Middle (props) {
        return(
        <div className={props.className}>

            <div
            className="butttonleft"
            >

                <ButtonGeneral className="butleft" //onClick={clickHandler}
                >
                <div className="button button--antheleft">
                <span>
                <i
                className="angle left icon big"
                ></i>
                </span>
                </div>
                </ButtonGeneral>

                <div
                className="bleft1"></div>
                <div className="bleft2"></div>
            </div>

            <div className="SB"></div>

            <div className="buttonright">

                <div className="butright1"></div>
                <div className="butright2"></div>
                <div
                className="bright"
                
                >
                <ButtonGeneral className="butright" //onClick={clickHandler}
                >
                <div className="button button--antheright">
                <span>
                    <i className="angle right icon big"></i>
                </span>
                </div>
                </ButtonGeneral>
            </div>
            
            </div>
        </div>
    );
}

export default Middle;

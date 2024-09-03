import TopMiddle from "./TopMiddle";
import ButtonMiddle from "./ButtomMiddle";
import ButtonGeneral from "../ComponentsElements/ButtonGeneral";

function Container () {
  
  return (
    <div className="container">
          
          <div className="column1"></div>
          <TopMiddle className="topmiddle"/>
          <div className="column3"></div>
          <div className="butttonleft">
            <div className="bleft1"></div>
            <div className="butleft">
              <ButtonGeneral
                passclass="button button--antheleft"
                //clickHandler={action(allProps[0].data.quotes[random].id)}
              >
                <span>
                  <i className="angle left icon big"></i>
                </span>
              </ButtonGeneral>
            </div>
            <div className="bleft2"></div>
          </div>
          
          <div className="column5"></div>
          <div className="buttonright">
            <div className="bright1"></div>
            <div className="butright">
              <ButtonGeneral
                passclass="button button--antheright"
                //quotes={this.props.quotes}
                //clickHandler={action}
              >
                <span>
                  <i className="angle right icon big"></i>
                </span>
              </ButtonGeneral>
            </div>
            <div className="bright2"></div>
          </div>
          <div className="column7"></div>
          <ButtonMiddle className="buttonmiddle" />
          <div className="column9"></div>

    </div>
  )
}

export default Container;
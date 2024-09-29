import React from 'react';
import Card from '../ComponentsElements/Card';
import Message from '../ComponentsElements/Message';
import Author from '../ComponentsElements/Author';
import BottonGeneral from '../ComponentsElements/BottonGeneral';
import Image from '../ComponentsElements/Image';

class ContainerNoData extends React.Component {

render(){
    return (
        <div className="container">
          <div></div>
          <div></div>
          <div></div>
          <div>
            <Card id="quote-box">
              <div>
                <div className="message">
                  <i className="quote left icon"></i>
                  <Message id="text" message={"No quote"} />
                  <i className="quote right icon"></i>
                </div>
                <div className="author">
                  <Author id="author" author={"No Author"} />
                </div>
              </div>
            </Card>
          </div>
          <div></div>
          <div className="button">
            <BottonGeneral passclass="button_left" clickHandler={this.clickHandler}>
              <i className="fast backward icon"></i>
            </BottonGeneral>
          </div>
          <div></div>
          <div className="button">
            <BottonGeneral
              passclass="button_right"
              quotes={this.props.quotes}
              clickHandler={this.clickHandler}
            >
              <i className="fast forward icon"></i>
            </BottonGeneral>
          </div>
          <div></div>
          <div>
            <Card passclass="card_image">
              <div></div>
              <Image passclass="image" />
              <div></div>
            </Card>
          </div>
          <div></div>
        </div>
        );
    }
}


export default ContainerNoData;
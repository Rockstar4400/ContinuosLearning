import React from 'react';
import Card from './ComponentsContainer/Card';
import Message from './ComponentsContainer/Message';
import Author from './ComponentsContainer/Author';
import Button from './ComponentsContainer/Button';
import Image from './ComponentsContainer/Image';

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
            <Button passclass="button_left" clickHandler={this.clickHandler}>
              <i className="fast backward icon"></i>
            </Button>
          </div>
          <div></div>
          <div className="button">
            <Button
              passclass="button_right"
              quotes={this.props.quotes}
              clickHandler={this.clickHandler}
            >
              <i className="fast forward icon"></i>
            </Button>
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
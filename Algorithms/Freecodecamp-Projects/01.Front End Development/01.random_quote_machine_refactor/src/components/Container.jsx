import Card from "./ComponentsContainer/Card";
import Message from "./ComponentsContainer/Message";
import ButtonShare from './ComponentsContainer/ButtonShare';
import CopyButton from './Svgs/Buttons/Copy/';
import DoneButton from './Svgs/Buttons/Done';
import Author from "./ComponentsContainer/Author";
import Button from "./ComponentsContainer/Button";
import Logo from "./ComponentsContainer/Logo";
import Image from "./ComponentsContainer/Image";
import { useSelector } from "react-redux";
import { clickHandler } from "../app/features/logic/Methods";

function Container () {
  const allProps = useSelector((state) => {
    return state.quotes;
  });

  console.log(allProps)

  const max = allProps[0].data.quotes.length - 1;
  const random = Math.floor(Math.random() * (max - 0 + 1)) + 0;

  return (
    <div className="container">
          <div className="column1"></div>
          <Card className="boxquoute" id="quote-box">
            <div className="message">
              <i className="quote left icon"></i>
               <Message id="text" message={allProps[0].data.quotes[random].quote}/>
              <i className="quote right icon"></i>
            </div>
            <div className="main"></div>
            <div className="author">
              <Author id="author" author={allProps[0].data.quotes[random].author} />
            </div>
            <div className="buttonsshare ">
              <div
                className="buttondivision buttondivision--share"
                //onClick={this.copyButton}
              >
                <div className="buttonEffect">
                  <div className="bc3"></div>
                  <ButtonShare className="bmessage">
                    <div className="b-icon" id="btn-copy">
                      <i id="copy-logo">
                        <CopyButton />
                      </i>
                      <i id="done-logo">
                        <DoneButton />
                      </i>
                    </div>
                    <div className="b-name">
                      <p>Copy</p>
                    </div>
                  </ButtonShare>
                  <div className="bc4"></div>
                </div>
              </div>

              <div
                className="buttondivision buttondivision--share"
                //onClick={() => dispatch(orderQuoteAsc(this.state))}
                id="tg-share-button"
              >
                <div className="buttonEffect">
                  <div className="bc3"></div>
                  <ButtonShare className="bmessage">
                    <div className="b-icon">
                      <i className="telegram plane icon"></i>
                    </div>
                    <div className="b-name">
                      <p>Telegram</p>
                    </div>
                  </ButtonShare>
                  <div className="bc4"></div>
                </div>
              </div>

              <div
                className="buttondivision buttondivision--share"
                //onClick={this.sharingFacebook}
                id="fb-share-button"
              >
                <div className="buttonEffect">
                  <div className="bc3"></div>
                  <ButtonShare className="bmessage">
                    <div className="b-icon">
                      <i className="facebook icon"></i>
                    </div>
                    <div className="b-name">
                      <p>Facebook</p>
                    </div>
                  </ButtonShare>
                  <div className="bc4"></div>
                </div>
              </div>

              <div
                className="buttondivision buttondivision--share"
                //onClick={this.sharingTwitter}
                id="tw-share-button"
              >
                <div className="buttonEffect">
                  <div className="bc3"></div>
                  <ButtonShare className="bmessage">
                    <div className="b-icon">
                      <a
                        id="tweet-quote"
                        href="https://twitter.com/intent/tweet"
                      ></a>
                      <i className="twitter icon"></i>
                    </div>
                    <div className="b-name">
                      <p>Twitter</p>
                    </div>
                  </ButtonShare>
                  <div className="bc4"></div>
                </div>
              </div>

              <div
                className="buttondivision buttondivision--share"
                //onClick={this.sharingGithub}
                id="gh-share-button"
              >
                <div className="buttonEffect">
                  <div className="bc3"></div>
                  <ButtonShare className="bmessage">
                    <div className="b-icon">
                      <i className="github square icon"></i>
                    </div>
                    <div className="b-name">
                      <p>Github</p>
                    </div>
                  </ButtonShare>
                  <div className="bc4"></div>
                </div>
              </div>
            </div>

            <div id="new-quote"></div>
          </Card>
          
          <div className="column2"></div>
          <div className="butttonleft">
            <div className="bleft1"></div>
            <div className="butleft">
              <Button
                passclass="button button--antheleft"
                clickHandler={clickHandler}
              >
                <span>
                  <i className="angle left icon big"></i>
                </span>
              </Button>
            </div>
            <div className="bleft2"></div>
          </div>
          <div className="imagesvg">
            <div className="svgside1"></div>
            <Card className="svgside2">
              <Image 
              passclass="image" 
              house={allProps[0].data.quotes[random].house} />
            </Card>
            <div className="svgside3"></div>
          </div>
          <div className="buttonright">
            <div className="bright1"></div>
            <div className="butright">
              <Button
                passclass="button button--antheright"
                //quotes={this.props.quotes}
                clickHandler={clickHandler}
              >
                <span>
                  <i className="angle right icon big"></i>
                </span>
              </Button>
            </div>
            <div className="bright2"></div>
          </div>
          <div className="column3"></div>
          <div className="imagesvg"></div>
          <div className="column4"></div>
          <div className="column5"></div>
          <div className="logo">
            <h4>Made with:</h4>
            <Logo className="react" />
          </div>
          <div className="column6"></div>
        </div>
  )
}

export default Container;
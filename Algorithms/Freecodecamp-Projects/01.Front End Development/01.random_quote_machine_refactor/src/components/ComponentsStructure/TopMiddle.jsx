import Message from "../ComponentsElements/Message";
import Card from "../ComponentsElements/Card";
import Author from "../ComponentsElements/Author";
import ButtonShare from "../ComponentsElements/ButtonShare";
import CopyButton from "../Svgs/Buttons/Copy";
import DoneButton from "../Svgs/Buttons/Done";
import { useSelector } from "react-redux";

function TopMiddle(props) {

  const allProps = useSelector((state) => {
    return state.quotes;
  });

  return (
      <Card className={props.className} id="quote-box">
        <div className="message">
          <i className="quote left icon"></i>
          <Message id="text" 
          message={allProps[0].data.quotes[props.random].quote} 
          />
          <i className="quote right icon"></i>
        </div>
        <div className="main"></div>
        <div className="author">
          <Author id="author" 
          author={allProps[0].data.quotes[props.random].author} 
          />
        </div>
        <div className="bshare">
          <div 
            className="bEffect bEffect--share"
            //onClick={this.copyButton}
          >
            <div className="bDivision">
              <div className="bc3"></div>
              <ButtonShare className="bmessage">
                <div className="b-icon">
                    <CopyButton id="copy-logo"/>
                </div>
                <div className="b-name">
                  <p>Copy</p>
                </div>
              </ButtonShare>
              <div className="bc4"></div>
            </div>
          </div>

          <div
            className="bEffect bEffect--share"
            //onClick={() => dispatch(orderQuoteAsc(this.state))}
            id="tg-share-button"
          >
            <div className="bDivision">
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
            className="bEffect bEffect--share"
            //onClick={this.sharingFacebook}
            id="fb-share-button"
          >
            <div className="bDivision">
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
            className="bEffect bEffect--share"
            //onClick={this.sharingTwitter}
            id="tw-share-button"
          >
            <div className="bDivision">
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
            className="bEffect bEffect--share"
            //onClick={this.sharingGithub}
            id="gh-share-button"
          >
            <div className="bDivision">
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
      </Card>
  );
}

export default TopMiddle;

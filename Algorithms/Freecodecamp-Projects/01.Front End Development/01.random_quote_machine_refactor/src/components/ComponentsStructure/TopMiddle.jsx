import Message from "../ComponentsElements/Message";
import Card from "../ComponentsElements/Card";
import Author from "../ComponentsElements/Author";
import ButtonShare from "../ComponentsElements/ButtonShare";
import CopyButton from "../Svgs/Buttons/Copy";
import DoneButton from "../Svgs/Buttons/Done";

function TopMiddle() {

  return (
    <div className="topmiddle">
      <div className="column1"></div>
      <div className="column2"></div>
      <div className="column3"></div>
      <div className="column4"></div>
      <Card className="boxquoute" id="quote-box">
        <div className="message">
          <i className="quote left icon"></i>
          <Message id="text" 
          //message={allProps[0].data.quotes[random].quote} 
          />
          <i className="quote right icon"></i>
        </div>
        <div className="main"></div>
        <div className="author">
          <Author id="author" 
          //author={allProps[0].data.quotes[random].author} 
          />
        </div>
        <div className="bshare">
          <div
            className="bdivision bdivision--share"
            //onClick={this.copyButton}
          >
            <div className="bEffect">
              <div className="bc3"></div>
              <ButtonShare className="bmessage">
                <div className="b-icon" id="btn-copy">
                    <CopyButton id="copy-logo"/>
                    <DoneButton id="done-logo"/>
                </div>
                <div className="b-name">
                  <p>Copy</p>
                </div>
              </ButtonShare>
              <div className="bc4"></div>
            </div>
          </div>

          <div
            className="bdivision bdivision--share"
            //onClick={() => dispatch(orderQuoteAsc(this.state))}
            id="tg-share-button"
          >
            <div className="bEffect">
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
            className="bdivision bdivision--share"
            //onClick={this.sharingFacebook}
            id="fb-share-button"
          >
            <div className="bEffect">
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
            className="bdivision bdivision--share"
            //onClick={this.sharingTwitter}
            id="tw-share-button"
          >
            <div className="bEffect">
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
            className="bdivision bdivision--share"
            //onClick={this.sharingGithub}
            id="gh-share-button"
          >
            <div className="bEffect">
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

        {/* <div id="new-quote"></div> */}
      </Card>
      <div className="column6"></div>
      <div className="column7"></div>
      <div className="column8"></div>
      <div className="column9"></div>
    </div>
  );
}

export default TopMiddle;

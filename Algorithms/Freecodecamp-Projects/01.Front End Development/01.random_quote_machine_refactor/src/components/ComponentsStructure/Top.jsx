import Message from "../ComponentsElements/Message";
import Card from "../ComponentsElements/Card";
import Author from "../ComponentsElements/Author";
import BottonShare from "../ComponentsElements/BottonShare";
import CopyBotton from "../Svgs/Bottons/CopyBotton";
import DoneBotton from "../Svgs/Bottons/DoneButton";
import { useSelector } from "react-redux";

function TopMiddle(props) {

  const allProps = useSelector((state) => {
    return state.quotes;
  });

  return (
      <Card className={props.className} id="quote-box">
        <div className="Container--Top--message">
          <i className="quote left icon"></i>
          <Message id="text" 
          message={allProps[0].data.quotes[props.random].quote} 
          />
          <i className="quote right icon"></i>
        </div>
        <div className="main"></div>
        <div className="Container--Top--author">
          <Author id="author" 
          author={allProps[0].data.quotes[props.random].author} 
          />
        </div>
        <div className="Container--Top--bshare">
          <div 
            className="Container--Top--bshare--bEffect
            Container--Top--bshare--bEffect--share"
            //onClick={this.copyButton}
          >
            <div className="bDivision">
              <div className="bc3"></div>
              <BottonShare className="bmessage">
                <div className="b-icon">
                    <CopyBotton id="copy-logo"/>
                </div>
                <div className="b-name">
                  <p>Copy</p>
                </div>
              </BottonShare>
              <div className="bc4"></div>
            </div>
          </div>

          <div
            className="Container--Top--bshare--bEffect
            Container--Top--bshare--bEffect--share"
            //onClick={() => dispatch(orderQuoteAsc(this.state))}
            id="tg-share-button"
          >
            <div className="bDivision">
              <div className="bc3"></div>
              <BottonShare className="bmessage">
                <div className="b-icon">
                  <i className="telegram plane icon"></i>
                </div>
                <div className="b-name">
                  <p>Telegram</p>
                </div>
              </BottonShare>
              <div className="bc4"></div>
            </div>
          </div>

          <div
            className="Container--Top--bshare--bEffect
            Container--Top--bshare--bEffect--share"
            //onClick={this.sharingFacebook}
            id="fb-share-button"
          >
            <div className="bDivision">
              <div className="bc3"></div>
              <BottonShare className="bmessage">
                <div className="b-icon">
                  <i className="facebook icon"></i>
                </div>
                <div className="b-name">
                  <p>Facebook</p>
                </div>
              </BottonShare>
              <div className="bc4"></div>
            </div>
          </div>

          <div
            className="Container--Top--bshare--bEffect
            Container--Top--bshare--bEffect--share"
            //onClick={this.sharingTwitter}
            id="tw-share-button"
          >
            <div className="bDivision">
              <div className="bc3"></div>
              <BottonShare className="bmessage">
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
              </BottonShare>
              <div className="bc4"></div>
            </div>
          </div>

          <div
            className="Container--Top--bshare--bEffect
            Container--Top--bshare--bEffect--share"
            //onClick={this.sharingGithub}
            id="gh-share-button"
          >
            <div className="bDivision">
              <div className="bc3"></div>
              <BottonShare className="bmessage">
                <div className="b-icon">
                  <i className="github square icon"></i>
                </div>
                <div className="b-name">
                  <p>Github</p>
                </div>
              </BottonShare>
              <div className="bc4"></div>
            </div>
          </div>
        </div>
      </Card>
  );
}

export default TopMiddle;

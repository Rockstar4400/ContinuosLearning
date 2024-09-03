import { useDispatch, useSelector } from "react-redux";
import { editProps } from "../../../store";

  export const sharingFacebook = () => {
    var fbButton = document.getElementById("fb-share-button");
    var url = window.location.href;

    fbButton.addEventListener("click", function () {
      window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" + url,
        "_self"
      );
      return false;
    });
  }

  export const sharingTelegram = () => {
    var tgButton = document.getElementById("tg-share-button");

    // tgButton.addEventListener("click", function () {
    //   const quoute = document.getElementById("text").innerHTML;
    //   const author = document.getElementById("author").innerHTML;
    //   window.open("https://t.me/share/url?url=" + quoute + author,"_self");
    //   return false;
    // });
  }

  export const sharingTwitter = () => {
    var twButton = document.getElementById("tw-share-button");
    document.getElementById("tweet-quote").removeAttribute("href");

    twButton.addEventListener("click", function () {
      const quoute = document.getElementById("text").innerHTML;
      const author = document.getElementById("author").innerHTML;
      window.open(
        "http://twitter.com/share?text=" +
          quoute +
          author +
          "&hashtags=GameOfThrones","_self"
      );
      return false;
    });
  }

  export const copyButton = () => {
    const quoute = document.getElementById("text").innerHTML;
    const author = document.getElementById("author").innerHTML;

    navigator.clipboard.writeText(quoute + author).then(
      function () {
        alert("Copied successfully!");
      },
      function (err) {
        console.error(err);
      }
    );

    const btn = document.getElementById("btn-copy");
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }

  export const sharingGithub = () => {
    var ghButton = document.getElementById("gh-share-button");
    ghButton.addEventListener("click", function () {
      window.open(
        "https://github.com/Rockstar4400/Freecodecamp-Projects/tree/main/01.Front%20End%20Development/01.random_quote_machine",
        "_self"
      );
      return false;
    });
  }
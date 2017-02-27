import _ from "lodash";
import style from "./style.css";
import photo from "./photo.jpg";

function component() {
  var elem = document.createElement("div");
  elem.innerHTML = _.join(["hello", "webpack"], ", ");
  return elem;
}

function image() {
  var elem = document.createElement("img");
  elem.src = photo;
  return elem;
}

document.body.appendChild(component());
document.body.appendChild(image());

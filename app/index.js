import _ from "lodash";

function component() {
  var elem = document.createElement("div");
  elem.innerHTML = _.join(["hello", "webpack"], ", ");
  return elem;
}

document.body.appendChild(component());

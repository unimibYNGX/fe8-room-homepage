var page = 1;
showPage(page);

function move(direction) {
  if (direction == "prev") {
    if (page == 1) page = 3;
    else page--;
  }
  if (direction == "next") {
    if (page == 3) page = 1;
    else page++;
  }
  showPage(page);
}

function hide(id) {
  document.getElementById(id).classList.add("hide");
}
function show(id) {
  document.getElementById(id).classList.remove("hide");
}
function hideByClass(class_id) {
  var els = document.getElementsByClassName(class_id);
  for (let i = 0; i < els.length; i++) {
    const element = els[i];
    element.classList.add("hide");
  }
}
function showByClass(class_id) {
  var els = document.getElementsByClassName(class_id);
  for (let i = 0; i < els.length; i++) {
    const element = els[i];
    element.classList.remove("hide");
  }
}

function showPage(n) {
  for (let index = 1; index <= 3; index++) {
    hide("img-hero-" + index);
    hide("block1-" + index);
  }
  show("img-hero-" + n);
  show("block1-" + n);
}

function checkSize(request, query) {
  var x = window.matchMedia("(" + query + ")");
  switch(request) {
    case 'device': 
      x.matches ? mobile() : desktop()
      break
    case 'font-size':
      x.matches ? small() : big()
      break
    default:
      console.log("request not recognized")
      break
  }
}

function small() {
  set('bar', 'width', '100px')
  set('logo', 'height', '18.5px')

}

function big() {
  set('block2', 'padding', '80px')
  set('bar', 'width', '80px')
  set('logo', 'height', '38px')
}

function mobile() {
  // console.log("[mobile mode]");
  setByClass("barbtn", "display", "none");
  set("row1", "overflow", "inherit");
  set("row1", "flex-wrap", "wrap");
  setByClass("img-hero", "width", "100%");
  set("row2", "overflow", "inherit");
  set("row2", "flex-wrap", "wrap");
  setByClass("block1", "padding", "30px");
  setByClass("block2", "padding", "30px");
  set("bar", "margin-left", "auto");
  set("bar", "margin-right", "auto");
  set("row1", "height", "auto");
  set("row2", "height", "auto");
  setByClass("arrow-left-right", "left", "auto");
  setByClass("arrow-left-right", "right", "0");
}

function desktop() {
  // console.log("[desktop mode]");
  setByClass("barbtn", "display", "inline-block");
  set("row1", "overflow", "auto");
  set("row1", "flex-wrap", "nowrap");
  setByClass("img-hero", "width", "65%");
  set("row2", "overflow", "hidden");
  set("row2", "flex-wrap", "nowrap");
  setByClass("block1", "padding", "75px");
  setByClass("block2", "padding", "30px");
  set("bar", "margin-left", "60px");
  set("row1", "height", "66.66vh");
  set("row2", "height", "33.34vh");
  setByClass("arrow-left-right", "display", "block");
  setByClass("arrow-left-right", "left", "0");
}

function set(id, attr, value) {
  var el = document.getElementById(id);
  el.style.setProperty(attr, value);
  // console.log(
  //   "Element <" + id + ">'s attribute '" + attr + "' set to: " + value
  // );
}

function setByClass(class_id, attr, value) {
  var els = document.getElementsByClassName(class_id);
  for (let i = 0; i < els.length; i++) {
    const element = els[i];
    element.style.setProperty(attr, value);
    // console.log(
    //   "Element <" + class_id + ">'s attribute '" + attr + "' set to: " + value
    // );
  }
}

window.addEventListener("resize", function (event) {
  checkSize("device", "max-width: 645px");
  checkSize("font-size", "max-width: 1440px")
});
checkSize("device", "max-width: 645px");
checkSize("font-size", "max-width: 1440px")


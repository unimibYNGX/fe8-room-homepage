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

function add(name, id) {
  document.getElementById(id).classList.add(name);
}

function remove(name, id) {
  document.getElementById(id).classList.remove(name);
}

function show(id) {
  remove('hide', id)
}

function hide(id) {
  add('hide', id)
}

function addByClass(name, class_id) {
  var els = document.getElementsByClassName(class_id);
  for (let i = 0; i < els.length; i++) {
    const element = els[i];
    element.classList.add(name);
  }
}

function showByClass(name, class_id) {
  var els = document.getElementsByClassName(class_id);
  for (let i = 0; i < els.length; i++) {
    const element = els[i];
    element.classList.remove(name);
  }
}

function showPage(n) {
  for (let index = 1; index <= 3; index++) {
    add("hide", "img-hero-" + index);
    add("hide", "block1-" + index);
  }
  remove("hide", "img-hero-" + n);
  remove("hide", "block1-" + n);
}

function checkSize(request, query) {
  var x = window.matchMedia("(" + query + ")");
  switch (request) {
    case "device":
      x.matches ? mobile() : desktop();
      break;
    case "font-size":
      x.matches ? small() : big();
      break;
    default:
      console.log("request not recognized");
      break;
  }
}

function small() {
  set("bar", "width", "81.92px");
  set("logo", "height", "18.5px");
}

function big() {
  set("block2", "padding", "80px");
  set("bar", "width", "80px");
  set("logo", "height", "38px");
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
  set("block2", "min-width", "auto");
  setByClass("block1", "min-width", "auto");
  setByClass("arrow-left-right", "position", "relative");
  remove("hide", "hamburger");
  show('sidenav')
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
  set("block2", "min-width", "400px");
  setByClass("block1", "min-width", "430px");
  setByClass("arrow-left-right", "position", "absolute");
  add("hide", "hamburger");
  hide('sidenav')
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

var isOpen = false;
function sidenavToggle() {
  if (!isOpen) {
    down("sidenav");
    isOpen = true;
  } else {
    up("sidenav");
    isOpen = false;
  }
}
function up(id) {
  document.getElementById(id).classList.add("up");
  document.getElementById(id).classList.remove("down");
}
function down(id) {
  document.getElementById(id).classList.add("down");
  document.getElementById(id).classList.remove("up");
}
function downByClass(class_id) {
  var els = document.getElementsByClassName(class_id);
  for (let i = 0; i < els.length; i++) {
    const element = els[i];
    element.classList.add("down");
    element.classList.remove("up");
  }
}
function upByClass(class_id) {
  var els = document.getElementsByClassName(class_id);
  for (let i = 0; i < els.length; i++) {
    const element = els[i];
    element.classList.add("up");
    element.classList.remove("down");
  }
}

window.addEventListener("resize", function (event) {
  checkSize("device", "max-width: 800px");
  checkSize("font-size", "max-width: 2000px");
});
checkSize("device", "max-width: 800px");
checkSize("font-size", "max-width: 2000px");

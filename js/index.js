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
    element.classList.add("hide")
  }
}
function showByClass(class_id) {
  var els = document.getElementsByClassName(class_id);
  for (let i = 0; i < els.length; i++) {
    const element = els[i];
    element.classList.remove("hide")
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

function checkSize() {
  var x = window.matchMedia("(max-width: 645px)");
  console.clear();
  if (x.matches) {
    mobile();
  } else {
    desktop();
  }
  return x.matches;
}

function mobile() {
  console.log("[mobile mode]");
  
  setByClass('barbtn', 'display', 'none')
  set("row1", "overflow", "inherit");
  set("row1", "flex-wrap", "wrap");
  setByClass("img-hero", "width", "100%");
  set('row2', 'overflow', 'inherit')
  set('row2', 'flex-wrap', 'wrap')
  setByClass('block1', 'padding' , '30px')
  setByClass('block2', 'padding' , '30px')
  set('bar', 'margin-left', 'auto')
  set('bar', 'margin-right', 'auto')
  set('row1', 'height', 'auto')
  set('row2', 'height', 'auto')
  setByClass('arrow-left-right', 'left', 'auto')
  setByClass('arrow-left-right', 'right', '0')

}

function desktop() {
  console.log("[desktop mode]");

  setByClass('barbtn', 'display', 'inline-block')
  set("row1", "overflow", "scroll");
  set("row1", "flex-wrap", "nowrap");
  setByClass("img-hero", "width", "65%");
  set('row2', 'overflow', 'scroll')
  set('row2', 'flex-wrap', 'nowrap')
  setByClass('block1', 'padding', '75px')
  setByClass('block2', 'padding' , '30px')
  set('bar', 'margin-left', '60px')
  set('row1', 'height', '66.66vh')
  set('row2', 'height', '33.34vh')
  setByClass('arrow-left-right', 'display', 'block')
  setByClass('arrow-left-right', 'left', '0')

}

function set(id, attr, value) {
  var el = document.getElementById(id);
  el.style.setProperty(attr, value);
  console.log(
    "Element <" + id + ">'s attribute '" + attr + "' set to: " + value
  );
}

function setByClass(class_id, attr, value) {
  var els = document.getElementsByClassName(class_id);
  for (let i = 0; i < els.length; i++) {
    const element = els[i];
    element.style.setProperty(attr, value);
    console.log(
      "Element <" + class_id + ">'s attribute '" + attr + "' set to: " + value
    );
  }
}

window.addEventListener("resize", function (event) {
  checkSize();
});
checkSize();

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

function showPage(n) {
  for (let index = 1; index <= 3; index++) {
    hide("img-hero-" + index);
    hide("block1-" + index);
  }
  show("img-hero-" + n);
  show("block1-" + n);
}

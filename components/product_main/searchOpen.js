const openBtnSerch = document.getElementById("searchOpen");
openBtnSerch.addEventListener("click", openSerch);

function openSerch() {
  document.getElementById("searchMenu").style.display = "block";
}

const closeBtnSerch = document.getElementById("searchClose");
closeBtnSerch.addEventListener("click", closeSerch);
function closeSerch() {
  document.getElementById("searchMenu").style.display = "none";
}

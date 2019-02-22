function getModel() {
  var rand = Math.floor((Math.random() * 3)+1);
  if (rand === 1){
    document.getElementById("one").style.display = "block";
  }
  else if (rand === 2) {
    document.getElementById("two").style.display = "block";
  }
  else {
    document.getElementById("three").style.display = "block";
  }
}

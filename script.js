
  let el = document.querySelectorAll('.thumb li');
for (let i = 0; i < el.length; i++){
  el[i].onclick = function(){
    var c = 0;
    while(c < el.length){
      el[c++].className = "check";
    }
    el[i].className = "check active";
  }
}
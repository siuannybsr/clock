// START CLOCK SCRIPT

Number.prototype.pad = function(n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};

function updateClock() {
  var now = new Date();
  var sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours(),
    mo = now.getMonth(),
    dy = now.getDate(),
    yr = now.getFullYear();
  var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  var tags = ["mon", "d", "y", "h", "m", "s"],
    corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2)];
  for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

// END CLOCK SCRIPT

var pos = 0,
dpos = 3.5714,
cycle,
heart = false,
animating = false;

$('heart').click(function(){},function(){
  if(heart && !animating){
    $('heart').css('background-position','0 0');
    heart = false;
  }else if(!animating){
    animating = true;
    animate();
  }
});

function animate(){
  cycle = setInterval(increment,30);
}

function increment(){
  pos += dpos;
  if(pos > 100){
    clearInterval(cycle);
    heart = true;
    animating = false;
    pos = 0;
  }else{
    $('heart').css('background-position',pos+'% 0');
  }
}

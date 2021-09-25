var options={
    height:700,
    duration:1000,
    interval:7500
};
document.addEventListener('DOMContentLoaded', function(){
var elems = document.querySelectorAll('.slider');
var instances = M.Slider.init(elems, options);
M.AutoInit();
});
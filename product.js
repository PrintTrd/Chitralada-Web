// nowIndex = 0;
// title = [
// "ไอศกรีมนมสดหนองโพ"
// ];
// detail1 = [
// "รสชาติ: รสนม, รสวนิลา, รสช็อกโกแลต, รสสตรอว์เบอร์รี"
// ];
// detail2 = [
// "ปริมาณสุทธิ: 85 กรัม"
// ];
// detail3 = [
// "ราคา: 35 บาท"
// ];

function show(){
    detailbox.classList.add("show");
    var opa = 0;
    var op = setInterval(frame, 50);
    function frame() {
        setTimeout(function(){
            if(opa>=1){
                clearInterval(op);
            }
            else{
                opa+=0.05;
                image.style.opacity = opa;
                text_detail.style.opacity = opa;            
            }            
        }, 1000);
    }
}
function hide(){
    image.style.opacity = 0;
    text_detail.style.opacity = 0;     
    detailbox.classList.remove("show");
}

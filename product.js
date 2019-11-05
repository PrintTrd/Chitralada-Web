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
    detailbox_area.classList.add("show");
    var opa = 0;
    var op = setInterval(frame, 50);
    function frame() {
        setTimeout(function(){
            if (opa >= 1) {
                clearInterval(op);
            }
            else {
                opa += 0.05;
                image.style.opacity = opa;
                text_detail.style.opacity = opa;            
            }            
        }, 1000);
    }
}
function hide(){
    image.style.opacity = 0;
    text_detail.style.opacity = 0;
    detailbox_area.classList.remove("show");
}

var state = 1;
function door(){
    if (state == 1) {
        var pos = 47;
        var door = setInterval(frames, 22);
        function frames() {
            setTimeout(function(){
                if (pos == 0) {
                    clearInterval(door);
                }
                else {
                    pos--;
                    l_door.style.left = -pos + 'vw';
                    r_door.style.left = pos + 'vw';
                }            
            }, 250);
        }
        state = 0;    
    } 
    else {
        var pos = 0;
        var door = setInterval(frames, 22);
        function frames() {
            setTimeout(function(){
                if (pos == 47) {
                    clearInterval(door);
                }
                else {
                    pos++;
                    l_door.style.left = -pos + 'vw';
                    r_door.style.left = pos + 'vw';
                }            
            }, 250);
        }
        state = 1;
    }

}
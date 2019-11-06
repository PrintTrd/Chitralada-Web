data = {
    "data": [
        {
            "image": "1icecream_Nong-Pho_image",
            "title": "ไอศกรีมนมสดหนองโพ",
            "sub": [
                "<strong>รสชาติ:</strong> รสนม, รสวนิลา, รสช็อกโกแลต, รสสตรอว์เบอร์รี",
                "<strong>ปริมาณสุทธิ:</strong> 85 กรัม",
                "<strong>ราคา:</strong> 35 บาท"
            ]  
        },
        {
            "image": "2yogurt_Thai-Denmark_image",
            "title": "โยเกิร์ตไทยเดนมาร์ค",
            "sub": [
                "<strong>รสชาติ:</strong> รสออริจินอล, รสแยมสตรอว์เบอร์รี",
                "<strong>ปริมาณสุทธิ:</strong> 120 กรัม",
                "<strong>ราคา:</strong> 13 บาท"
            ]  
        },
        {
            "image": "3butter_image",
            "title": "เนยแข็งมหามงคลชนิดทาและขนมปังกรอบ",
            "sub": [
                "<strong>ปริมาณสุทธิ:</strong> 200 กรัม",
                "<strong>ราคา:</strong> 15 บาท"
            ]  
        },
        {
            "image": "4yogurt_image",
            "title": "โยเกิร์ต ไขมันต่ำ",
            "sub": [
                "<strong>รสชาติ:</strong> รสธรรมดา, รสสตรอว์เบอร์รี, รสวุ้นมะพร้าว",
                "<strong>ปริมาณสุทธิ:</strong> 150 กรัม",
                "<strong>ราคา:</strong> 15 บาท"
            ]  
        },
        {
            "image": "5milk_Nong-Pho_image",
            "title": "นมหนองโพ นมโคแท้ 100%",
            "sub": [
                "<strong>รสชาติ:</strong> รสจืด, รสหวาน",
                "<strong>ปริมาณสุทธิ:</strong> 180 มล.",
                "<strong>ราคา:</strong> 10 บาท"
            ]  
        },
        {
            "image": "6milk_pellets_image",
            "title": "นมปรุงแต่งชนิดเม็ด",
            "sub": [
                "<strong>รสชาติ:</strong> รสหวาน",
                "<strong>ปริมาณสุทธิ:</strong> 25 กรัม",
                "<strong>ราคา:</strong> 15 บาท"
            ]  
        },
        {
            "image": "7milk_Thai-Denmark_image",
            "title": "นมไทยเดนมาร์ค",
            "sub": [
                "<strong>รสชาติ:</strong> รสจืด, รสหวาน, รสช็อกโกแลต",
                "<strong>ปริมาณสุทธิ:</strong> 125 มล.",
                "<strong>ราคา:</strong> 10 บาท"
            ]  
        },
        {
            "image": "8milk_Chitralada_image",
            "title": "นมจิตรลดา",
            "sub": [
                "นมยูเอชที",
                "<strong>รสชาติ:</strong> รสจืด",
                "<strong>ปริมาณสุทธิ:</strong> 200 มล.",
                "<strong>ราคา:</strong> 10 บาท"
            ]  
        }
    ]
}

function rendata(index){
    image.src = `image/Product/${data.data[index].image}.svg`;
    detail.innerHTML = "";
    title.innerHTML = data.data[index].title;
    for (let j = 0; j < data.data[index].sub.length; j++){
        let p = document.createElement("p");
        p.innerHTML = data.data[index].sub[j];
        detail.appendChild(p);
    }
}

function show(nowIndex){
    // detailbox_area.classList.add("show");
    detailbox_area.style.transform = "scale(1)";
    rendata(nowIndex);
    flex_detail.style.opacity = 1;
}
function hide(){ 
    // detailbox_area.classList.remove("show");
    detailbox_area.style.transform = "scale(0)";
    flex_detail.style.opacity = 0;
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
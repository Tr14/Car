function openPopup1() {
    document.getElementById('test1').style.display = 'block';
}

function closePopup1() {
    //close popup
    document.getElementById("test1").style.display = "none";

    //stop youtube embed video
    var ysrc = document.getElementById("iframe1").src;
    var newsrc = ysrc.replace("&autoplay=1", "");
    document.getElementById("iframe1").src = newsrc;
}

function openPopup2() {
    document.getElementById('test2').style.display = 'block';
}

function closePopup2() {
    document.getElementById("test2").style.display = "none";
    var ysrc = document.getElementById("iframe2").src;
    var newsrc = ysrc.replace("&autoplay=1", "");
    document.getElementById("iframe2").src = newsrc;
}

function openPopup4() {
    document.getElementById('test4').style.display = 'block';
}

function closePopup4() {
    document.getElementById("test4").style.display = "none";
    var ysrc = document.getElementById("iframe4").src;
    var newsrc = ysrc.replace("&autoplay=1", "");
    document.getElementById("iframe4").src = newsrc;
}

function openPopup5() {
    document.getElementById('test5').style.display = 'block';
}

function closePopup5() {
    document.getElementById("test5").style.display = "none";
    var ysrc = document.getElementById("iframe5").src;
    var newsrc = ysrc.replace("&autoplay=1", "");
    document.getElementById("iframe5").src = newsrc;
}

function openPopup6() {
    document.getElementById('test6').style.display = 'block';
}

function closePopup6() {
    document.getElementById("test6").style.display = "none";
    var ysrc = document.getElementById("iframe6").src;
    var newsrc = ysrc.replace("&autoplay=1", "");
    document.getElementById("iframe6").src = newsrc;
}
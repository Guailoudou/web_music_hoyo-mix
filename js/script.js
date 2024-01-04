audio1= new Audio('audio/close_win.mp3');
audio2= new Audio('audio/open_win.mp3');
audio3= new Audio('audio/switch_task.mp3');
function foot() {
    document.getElementsByClassName("foot")[1].style.width=window.innerWidth+"px";
    document.getElementsByClassName("foot")[0].style.width=window.innerWidth+"px";
}
window.onload = function () { 
    foot();
    location.href="#1";
    add(gydeta1);
    window.addEventListener('resize', foot);
    addLinkTag("css/font.css");
    audiologin();
}
function audiologin(){
    const video = document.getElementById("audio");
    video.oncanplay = () => {
        var login = document.querySelector(".player img");
        login.style.display="none";
    };
}
function addLinkTag(href){
    var link = document.createElement('link');
    link.setAttribute("rel","stylesheet");
    link.href = href;
    document.body.appendChild(link);
}
function playMusic(url) {
    var login = document.querySelector(".player img");
    login.style.display="block";
    openplay();
    var audio = document.getElementById("audio");
    audio.src = url;
    audio.play();
}
function closeplay() {
    audio1.play();
    document.getElementsByClassName('bi-chevron-up')[0].style.transform = "rotate(0deg)";
    document.getElementsByClassName('open')[0].style.bottom = "0px";
    document.getElementsByClassName('open')[0].setAttribute('onclick', 'openplay();');
    document.getElementsByClassName("player")[0].style.height = "0px";
}
function openplay() {
    audio2.play();
    document.getElementsByClassName('bi-chevron-up')[0].style.transform = "rotate(180deg)";
    document.getElementsByClassName('open')[0].style.bottom = "70px";
    document.getElementsByClassName('open')[0].setAttribute('onclick', 'closeplay();');
    document.getElementsByClassName("player")[0].style.height = "70px";
}
//音频链接，图片链接，标题，文本
function addblock(asrc,img_src,title,text){
    var block=document.querySelector(".zlist");
    var car_block=document.createElement("div");``
    car_block.className="block";
    var div1=document.createElement("div");
    var img=document.createElement("img");
    img.src=img_src;
    var i=document.createElement("i");
    i.className="bi-play-fill play";
    var ajs = "playMusic('"+asrc+"');";
    i.setAttribute('onclick', ajs);
    div1.appendChild(img);
    div1.appendChild(i);
    var div2=document.createElement("div");
    var atitle=document.createElement("h2");
    atitle.innerText=title;
    var ap=document.createElement("p");
    ap.innerText=text;
    var i2=document.createElement("i");
    i2.className="bi-download dl";
    var dla = document.createElement("a");
    dla.href=asrc;
    dla.setAttribute('download','');
    dla.appendChild(i2);
    div2.appendChild(dla);

    div2.appendChild(atitle);
    div2.appendChild(ap);
   
    car_block.appendChild(div1);
    car_block.appendChild(div2);
    block.appendChild(car_block);
}
function add(deta){
    audio3.play();
    var block=document.querySelector(".zlist");
    block.innerHTML="";
    for (var i = 0; i < deta.length; i++){
        var asrc = deta[i].asrc;
        addblock(asrc,deta[i].img_src,deta[i].title,deta[i].text);
    }
}
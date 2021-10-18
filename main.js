const burger= document.querySelector(".burger");
const menu= document.querySelector(".menu");

burger.addEventListener("click", function(){
    menu.classList.toggle("active");
    body.classList.add("stopScrolling")
} )

menu.addEventListener("click", function(){
    menu.classList.toggle("active");
    body.classList.remove("stopScrolling")
})

const slideList=[
{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam sit magni quos magnam?"},
{text:"Fugiat, repellendus aspernatur quo vel aut veritatis hic consectetur laboriosam."},
{text:"Perspiciatis alias culpa molestiae qui, ipsum sit? Expedita excepturi exercitationem officia dolor."}
]

const slide= document.querySelector('.slide')
const time = 2000;
let active = 0;


const changeSlide = () => {
    active++;
    if (active === slideList.length) {
     active = 0;
    }
    slide.textContent = slideList[active].text;
   }
let indexInterval = setInterval(changeSlide, time)


let userName=document.querySelector('.name');
let mail=document.querySelector('.email');
let sendAlert=document.querySelector('.messageAlert');
let closeBtn=document.querySelectorAll('.messageAlert button');
let body=document.querySelector('body');
const sendBtn=document.querySelector('.subBtn');
let emptyValue=document.querySelector('.emptyValue');


// form input value verification and reset

sendBtn.addEventListener('click', function(){
    if (userName.value == "" || mail.value == "" ){
    emptyValue.classList.add('alertActive');
    }
    else{
        sendAlert.classList.add('alertActive');
        body.classList.add('stopScrolling');
        userName.value ="";
        mail.value = "";
   }
})

// disable form  message alert

closeBtn.forEach(function(e){
    e.addEventListener("click", function(){
        sendAlert.classList.remove('alertActive');
        emptyValue.classList.remove('alertActive');
        body.classList.remove('stopScrolling');
    })
})

// Gallery

let gallery=document.querySelector('.galleryWrap');
let imgNumber=document.querySelector('.number');
let closeGallery=document.querySelector('.closeGallery');
let img=document.querySelector('.gallery img');
let galleryMiniArray=document.querySelectorAll('.worksItm h1');
let previous=document.querySelector('.fa-chevron-left')
let next=document.querySelector('.fa-chevron-right')

let index=1;
let activeElm="";
const openGallery = (elem) => {
            activeElm=elem.textContent;
            gallery.style.opacity="1";
            gallery.style.zIndex="4";
            imgNumber.textContent=index;
            img.setAttribute('src', `img/${activeElm}${index}.jpg`);
}

galleryMiniArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
        openGallery(elem);
        body.classList.add('stopScrolling');
    });
});

next.addEventListener('click', function(){
       index++;
       imgNumber.textContent=index;
       img.setAttribute('src', `img/${activeElm}${index}.jpg`);
       previous.style.display="block";
       if(index==5){
        next.style.display="none"
       }
})

previous.addEventListener('click', function(){
         --index;
         imgNumber.textContent=index;
         img.setAttribute('src', `img/${activeElm}${index}.jpg`);
         next.style.display="block";
        if(index == "1"){
             previous.style.display="none"
          }
})

closeGallery.addEventListener('click', function(){
    gallery.style.opacity="0";
    gallery.style.zIndex="-4";
    img.setAttribute('src', ``);
    index=1
    previous.style.display="none"
    next.style.display="block";
    body.classList.remove('stopScrolling');
})


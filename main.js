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
const slideDisplayTime = 5000;
let activeSlideIndex = 0;


function changeSlide() {
    activeSlideIndex++;
    if (activeSlideIndex === slideList.length) {
        activeSlideIndex = 0;
    }
    slide.textContent = slideList[activeSlideIndex].text;
}
let indexInterval = setInterval(changeSlide, slideDisplayTime)


const userName=document.querySelector('.name');
const mail=document.querySelector('.email');
const sendAlert=document.querySelector('.messageAlert');
const closeBtn=document.querySelectorAll('.messageAlert button');
const body=document.querySelector('body');
const sendBtn=document.querySelector('.subBtn');
let emptyValueAlert=document.querySelector('.emptyValueAlert');


// form input value verification and reset

sendBtn.addEventListener('click', function(e){
    e.preventDefault();
    if (userName.value === "" || mail.value === "" ){
    emptyValueAlert.classList.add('alertActive');
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
        emptyValueAlert.classList.remove('alertActive');
        body.classList.remove('stopScrolling');
    })
})

// Gallery

const gallery=document.querySelector('.galleryWrap');
let imgNumber=document.querySelector('.number');
const closeGallery=document.querySelector('.closeGallery');
let img=document.querySelector('.gallery img');
const galleryMiniArray=document.querySelectorAll('.worksItm h1');
const previousPhoto=document.querySelector('.fa-chevron-left')
const nextPhoto=document.querySelector('.fa-chevron-right')

let activPhotoindex=1;
let activeCategory="";
const openGallery = (elem) => {
    activeCategory=elem.textContent;
            gallery.style.opacity="1";
            gallery.style.zIndex="4";
            imgNumber.textContent=activPhotoindex;
            img.setAttribute('src', `img/${activeCategory}${activPhotoindex}.jpg`);
}

galleryMiniArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
        openGallery(elem);
        body.classList.add('stopScrolling');
    });
});

nextPhoto.addEventListener('click', function(){
       activPhotoindex++;
       imgNumber.textContent=activPhotoindex;
       img.setAttribute('src', `img/${activeCategory}${activPhotoindex}.jpg`);
       previousPhoto.style.display="block";
       if(activPhotoindex === 5){
        nextPhoto.style.display="none"
       }
})

previousPhoto.addEventListener('click', function(){
         --activPhotoindex;
         imgNumber.textContent=activPhotoindex;
         img.setAttribute('src', `img/${activeCategory}${activPhotoindex}.jpg`);
         nextPhoto.style.display="block";
        if(activPhotoindex === "1"){
             previousPhoto.style.display="none"
          }
})

closeGallery.addEventListener('click', function(){
    gallery.style.opacity="0";
    gallery.style.zIndex="-4";
    img.setAttribute('src', ``);
    activPhotoindex=1
    previousPhoto.style.display="none"
    nextPhoto.style.display="block";
    body.classList.remove('stopScrolling');
})


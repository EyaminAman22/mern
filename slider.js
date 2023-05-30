let slides=document.querySelectorAll(".slide")
let slidesArray=Array.from(slides)
let prev=document.querySelector(".prev")
let next=document.querySelector(".next")

function prevnext(){
    let activeSlide= document.querySelector(".slide.active")
    let activeIndex= slidesArray.indexOf(activeSlide)
    let prev;
    let next;
    if(activeIndex==0){
         prev=slidesArray[slidesArray.length-1]
    }
    else{
        prev=slidesArray[activeIndex-1]
    }
    if(activeIndex==slidesArray.length-1){
        next=slidesArray[slidesArray.length-slidesArray.length]
   }
    else{
        next=slidesArray[activeIndex+1]
   }
    
   return [next,prev]
}
prevnext()
function koijabo(){
    let activeSlide= document.querySelector(".slide.active")
    let activeIndex= slidesArray.indexOf(activeSlide)
    let [next,prev]=prevnext()

    slidesArray.map((slide, index)=>{
        if(activeIndex==index){
            slide.style.transform="translateX(0)"
        }
        else if(slide==prev){
            slide.style.transform="translateX(-100%)"
        }
        else if(slide==next){
            slide.style.transform="translateX(100%)"
        }
        slide.addEventListener("transitionend",function(){
            slide.classList.remove("smooth")
        })
        
    })
}
next.addEventListener("click", function(){
    let activeSlide= document.querySelector(".slide.active")
    let [next]=prevnext()
    activeSlide.classList.add("smooth")
    activeSlide.classList.remove("active")
    activeSlide.style.transform="translateX(-100%)"
    next.classList.add("active")
    next.classList.add("smooth")
    next.style.transform="translateX(0)"
    koijabo()
})
prev.addEventListener("click", function(){
    let activeSlide= document.querySelector(".slide.active")
    let [next,prev]=prevnext()
    activeSlide.classList.add("smooth")
    activeSlide.classList.remove("active")
    activeSlide.style.transform="translateX(100%)"
    prev.classList.add("active")
    prev.classList.add("smooth")
    prev.style.transform="translateX(0)"
    koijabo()
})

koijabo()
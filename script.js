var crsr= document.querySelector("#cursor")
var blr= document.querySelector("#blur")
document.addEventListener("mousemove",function(dets){//dets=x aur y me jb jb mouse move krega tb tb count badhega
  crsr.style.left=dets.x+"px"
  crsr.style.top=dets.y+"px"
})
document.addEventListener("mousemove",function(dets){//dets=x aur y me jb jb mouse move krega tb tb count badhega
  blr.style.left=dets.x-200+"px"
  blr.style.top=dets.y-200+"px"
})

gsap.to("#nav",{//object starts, property:value
  backgroundColor: "black",//camel case
  duration:0.5,
  height:"11.5%",
  scrollTrigger: {
    trigger: "#nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:1
  }
})
gsap.to("#main",{
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller:"body",
    // markers:true,
    start:"top -25%",
    end:"top -70%",
    scrub:2
  }
})


// learn gsap
import { gsap } from "gsap";



function redAnimation(){
    var tl = gsap.timeline();
    var mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
        // mobile setup code here...
        tl.to("#red-circle",{duration:1, 1:300})
        .to("#red-circle",{duration:0.5, scaleX:"90%"});
    });

    mm.add("(min-width: 768px)", () => {
        // desktop setup code here...        
        tl.to("#red-circle",{duration:1, y:300})
        .to("#red-circle",{duration:1, scaleX:"70%"});
    });


    return tl;
}

function aquaAnimation(){
    var tl = gsap.timeline();
    tl.to("#aqua-box",{duration:1, x:"100%"})
        .to("#aqua-box",{duration:1, y:"100%"})
        .to("#aqua-box",{duration:1, scale:1.5});
    return tl;
}

function yellowAnimation(){
    var tl = gsap.timeline();
    var mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
        // mobile setup code here...
        tl.to("#yellow-rect",{duration:1, x:"50%"})
    });

    mm.add("(min-width: 768px)", () => {
        // desktop setup code here...
        tl.to("#yellow-rect",{duration:1, x:"200%"})
        .to("#yellow-rect",{duration:1, scaleY:"50%"});
    });
    
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(redAnimation())
    .add(aquaAnimation())
    .add(yellowAnimation(),"-=2.5");

$(document).ready(()=>{

    var clip = document.getElementById("main");
    var sec = new Parallax(clip); 


    TweenMax.from(".title",2,{opacity:0});
    TweenMax.from(".title--snd",2,{x:-1000,y:-200});
    TweenMax.staggerFrom(".anim",1,{rotation:1080,ease: Power0.easeNone,repeat:-1});
    TweenMax.to(".light",0.1,{opacity:0,repeat:-1});
    TweenMax.staggerFrom(".anim-1",6,{rotation:360,ease: Power0.easeNone,repeat:-1},0.5);
    
    
    var battery1 = new TimelineMax();
    battery1
    .to(".battery",1.5,{color:"#0E6655",fontSize:200})
    .to(".battery",1.5,{color:"#000",fontSize:150})
    .repeat(-1);
    
    var pump1 = new TimelineMax();
    pump1
    .delay(2)
    .to(".pump",1.5,{color:"#D35400",fontSize:200})
    .to(".pump",1.5,{color:"#000",fontSize:150})
    .repeat(-1);
    
    var oil1 = new TimelineMax();
    oil1
    .delay(4)
    .to(".oil",1.5,{color:"#F1C40F ",fontSize:200})
    .to(".oil",1.5,{color:"#000",fontSize:150})
    .repeat(-1);
    
    var meter1 = new TimelineMax();
    meter1
    .delay(6)
    .to(".meter",1.5,{color:"#C0392B",fontSize:200})
    .to(".meter",1.5,{color:"#000",fontSize:150})
    .repeat(-1);
    
    
    
        
});





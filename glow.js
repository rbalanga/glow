var glowActive = 1;

function changeBg() {
    let glow1 = document.getElementById("glow-id1");
    let glow2 = document.getElementById("glow-id2");
    let glow3 = document.getElementById("glow-id3");
    if (glowActive == 1){
        glow1.style.opacity = ".4";
        glow2.style.opacity = "1";
        glow3.style.opacity = "0";
        glowActive = 2;
        return;
    }
    if (glowActive == 2){
        glow1.style.opacity = "0";
        glow2.style.opacity = ".4";
        glow3.style.opacity = "1";
        glowActive = 3;
        return;
    }
    if (glowActive == 3){
        glow1.style.opacity = "1";
        glow2.style.opacity = "0";
        glow3.style.opacity = ".4";
        glowActive = 1;
        return;
    }
 }
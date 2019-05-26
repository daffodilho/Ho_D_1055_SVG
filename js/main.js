(() => {
    console.log('Click any icon!');
    
    //elements
    let allIcons = document.querySelectorAll("#iconWrapper div"),
        facebook = document.querySelector("#facebook"),
        googleplus = document.querySelector("#googleplus"),
        instagram = document.querySelector("#instagram"),
        linkedin = document.querySelector("#linkedin"),
        pinterest = document.querySelector("#pinterest"),
        snapchat = document.querySelector("#snapchat"),
        tumblr = document.querySelector("#tumblr"),
        twitter = document.querySelector("#twitter"),
        whatsapp = document.querySelector("#whatsapp"),
        youtube = document.querySelector("#youtube");

    //function
    function logMyId(){
        console.log(this.firstChild.id);
    }
    
    function facebookTurn(){
        facebook.classList.toggle("selected");
    }
    
    function googleplusTurn(){
        googleplus.classList.toggle("selected");
    }
    
    function instagramTurn(){
        instagram.classList.toggle("selected");
    }
    
    function linkedinTurn(){
        linkedin.classList.toggle("selected");
    }
    
    function pinterestTurn(){
        pinterest.classList.toggle("selected");
    }
    
    function snapchatTurn(){
        snapchat.classList.toggle("selected");
    }
    
    function tumblrTurn(){
        tumblr.classList.toggle("selected");
    }
    
    function twitterTurn(){
        twitter.classList.toggle("selected");
    }
    
    function whatsappTurn(){
        whatsapp.classList.toggle("selected");
    }
    
    function youtubeTurn(){
        youtube.classList.toggle("selected");
    }
    
    //events
    allIcons.forEach(item=>{
        item.addEventListener("click", logMyId);
    })
    
    facebook.addEventListener("click", facebookTurn);
    
    googleplus.addEventListener("click", googleplusTurn);
    
    instagram.addEventListener("click", instagramTurn);
    
    linkedin.addEventListener("click", linkedinTurn);
    
    pinterest.addEventListener("click", pinterestTurn);
    
    snapchat.addEventListener("click", snapchatTurn);
    
    tumblr.addEventListener("click", tumblrTurn);
    
    twitter.addEventListener("click", twitterTurn);
    
    whatsapp.addEventListener("click", whatsappTurn);
    
    youtube.addEventListener("click", youtubeTurn);
    
})();
    
(() => {
    console.log('Click any icon!');
    
    //elements
    let allIcons = document.querySelectorAll("#iconWrapper div"),
        //facebook = document.querySelector("#facebook"),
        allSVG = document.querySelectorAll("#iconWrapper svg");
        
        

    
    //function
    function logMyId() {
        console.log(this.firstChild.id);
        //allIcons.classList.toggle("selected");
    }
    
    function makeATurn() {
        allSVG.classList.toggle("selected");
    }
    
    //function makeATurn(){
        //facebook.classList.toggle("selected");
    //}
    
    
    
    //events
    allIcons.forEach(item=>{
        item.addEventListener("click", logMyId);
    })
    
    allSVG.forEach(item=>{
        item.addEventListener("click", makeATurn);
    })
    
    //facebook.addEventListener("click", makeATurn);
    
    
    
    
    
})();
    
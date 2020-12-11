
/**
 *selects all sections in an array
 *saves the original back ground color for any section
*/
const sections = document.querySelectorAll(".section");
const originalColor = sections[0].style.backgroundColor ; 

// this function checks if a given element is in viewport or not

function isInViewPort(element) {
    var rect     = element.getBoundingClientRect(),
        vWidth   = window.innerWidth || document.documentElement.clientWidth,
        vHeight  = window.innerHeight || document.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };     

        
    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
          element.contains(efp(rect.left,  rect.top))
      ||  element.contains(efp(rect.right, rect.top))
      ||  element.contains(efp(rect.right, rect.bottom))
      ||  element.contains(efp(rect.left,  rect.bottom))
    );
}

/* this function returns the innerHTML for the unorderedlist also links every 
item to its section through href attribute
*/
function listMaker (listOfObjects){
    let emptyList = '';
    for(let obj of listOfObjects ){
        emptyList += `<li> <a href="#${obj.id}">  ${obj.dataset.nav}  </a> </li>`;
    }
    
    return emptyList;
}

// selection unordered navlist and inserting our dynamic sections list in it
const navList = document.querySelector('#navbar__list');
navList.innerHTML = listMaker(sections); 

/*
 Define selector for selecting 
 anchor links with the hash 

Collect all such anchor links 
*/
let anchorsList =  document.querySelectorAll('a[href^="#"]'); 
               
          
// Iterate through each of the links 
anchorsList.forEach(link => { 
    link.onclick = function (e)    { 
      
        // perevent scrolling if there is a blank hash value 
         
        e.preventDefault(); 
          
        // Using the hash property, get the destination to scroll to
         
        let destination =  
        document.querySelector(this.hash); 
          
        // Using the scrollIntoView method to scroll to the destination
         
        destination.scrollIntoView({ 
            behavior: 'smooth' 
        }); 
    } 
}); 


/* this listner checks for the active section and binds an active class to it
 and change its css-style so it can be distinguished
*/
window.addEventListener('scroll',  () => {
    for(let sec of sections){
        if (isInViewPort(sec)) {
            
            sec.classList.add("your-active-class");
            sec.style.backgroundColor = '#cc99ff';
            
        }
        else{
            sec.classList.remove("your-active-class");
            sec.style.backgroundColor = originalColor ; 
        }
    }
},true);






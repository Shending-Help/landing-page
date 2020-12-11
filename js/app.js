
/**
 *selects all sections in an array
 *saves the original back ground color for any section
*/
const sections = document.querySelectorAll(".section");
const originalColor = sections[0].style.backgroundColor ; 

// this function checks if a given element is in viewport or not
function isInViewPort (element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
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
*/
let anchorSelector = 'a[href^="#"]'; 
      
// Collect all such anchor links 
let anchorList =  document.querySelectorAll(anchorSelector); 
               
          
// Iterate through each of the links 
anchorList.forEach(link => { 
    link.onclick = function (e)    { 
      
        // Prevent scrolling if the 
        // hash value is blank 
        e.preventDefault(); 
          
        // Get the destination to scroll to 
        // using the hash property 
        let destination =  
        document.querySelector(this.hash); 
          
        // Scroll to the destination using 
        // scrollIntoView method 
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






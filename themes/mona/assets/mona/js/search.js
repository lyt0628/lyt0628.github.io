import * as util from "./util/index.js"

function Init(){
    let searchInput = document.getElementById('header-search-input');
    let searchPannel = document.getElementById('header-search-pannel');
    searchPannel.style.display = 'none';

    function displayPannelIfAnyInput (){
        let text = searchInput.value;
          if(text === ''){
            searchPannel.style.display = 'none';
         }else{
            searchPannel.style.display = 'block';
         }       
    }

    function hidentSearchPannel(){
        searchPannel.style.display = 'none'
    }

    function isElementInSearchArea(elem){
        return elem == searchInput || searchPannel.contains(elem)
    }
 
    searchInput.addEventListener('focus', ()=>{
        displayPannelIfAnyInput();
    })
        
    searchInput.addEventListener('input', (event)=>{
         displayPannelIfAnyInput();
    })

    document.addEventListener('click', (event)=>{
        if(isElementInSearchArea(event.target)) {
            return
        }
        hidentSearchPannel()
    })
}


util.addLoadEvent(Init);

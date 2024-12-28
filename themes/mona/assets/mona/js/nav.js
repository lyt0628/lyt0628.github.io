import * as util from "./util/index.js"

function Init(){
    let subnavs = document.getElementsByClassName("header-nav-item header-nav-sub")

    for (const subnav of subnavs) {
        let toggle = subnav.getElementsByClassName("header-nav-sub-toggle")[0];
        let pannel = subnav.getElementsByClassName("header-nav-sub-pannel")[0];
 
        pannel.style.display = 'none';


        toggle.addEventListener('click', ()=>{
            pannel.style.display =  pannel.style.display == 'none' ? '' : 'none';
            if(pannel.style.display == 'none'){
            }
        });

        document.addEventListener('click', (event)=>{
            if(!toggle.contains(event.target) && !pannel.contains(event.target)) {
                pannel.style.display = 'none';
            }
        });       


    }

}


util.addLoadEvent(Init);


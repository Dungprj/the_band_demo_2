let getElement_Buy_Ticket = document.querySelectorAll('.btn');
let getElement_modal = document.querySelector('.modal');
let getElement_close = document.querySelector(".close-modal");
let getElement_modalcontainer = document.querySelector(".modal-container")
let open_modal = function(){
    getElement_modal.classList.add("open");
};

let close_modal = function(){
    getElement_modal.classList.remove('open')
}


getElement_Buy_Ticket.forEach(function(obj){
    obj.addEventListener('click',open_modal)

    })
   
getElement_close.addEventListener('click',close_modal)

getElement_modal.addEventListener("click",close_modal);


getElement_modalcontainer.addEventListener('click',function(event){
    event.stopPropagation()
})



   
     

    



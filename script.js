const researchBtn = document.querySelector("#research");
const planningBtn = document.querySelector("#planning");
const desigingBtn = document.querySelector("#desiging");
const manufacturingBtn = document.querySelector("#manufacturing");
const marketingBtn = document.querySelector("#marketing");
const modalWrapper = document.querySelector(".modal-wrapper");
const closeBtn = document.querySelector(".close-button");

researchBtn.addEventListener("click", function(){
    modalWrapper.classList.add("active");
})

closeBtn.addEventListener("click", function(){
    modalWrapper.classList.remove("active");
})

document.addEventListener("keydown", function(e){
    if(e.key === 'Escape'){
        modalWrapper.classList.remove("active");
    }
})

planningBtn.addEventListener("click", function(){
    
    modalWrapper.classList.add("active");
})

desigingBtn.addEventListener("click", function(){
    modalWrapper.classList.add("active");
})

manufacturingBtn.addEventListener("click", function(){
    modalWrapper.classList.add("active");
})

marketingBtn.addEventListener("click", function(){
    modalWrapper.classList.add("active");
})

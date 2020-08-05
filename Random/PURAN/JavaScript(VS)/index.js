function animatedform() {
    const arrows = document.querySelectorAll("fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextform = parent.nextElementSibling;

            //check for validation
            if (input.type==="text" && validateUser(input)){
                console.log('Everything is okay!')
            }
        });
    });
}

function validation(user){
    if(user.value.lenth<6){
        console.log("not enough characters");
        error('rgb(189, 87, 87)');
    }else{
        error(" rgb(87, 189, 129)");
        return true;
        
    }
}
function error(color){
    document.body.style.background = color;
}



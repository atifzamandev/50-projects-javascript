const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

//checkBoxes();
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 *4;

    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('show');
            
        } else {
            box.classList.remove('show');

        }//End of boxTop if
     
    
    })//End of boxes forEach loop


} // end of checkBoxex function
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length){
        currentActive =  circles.length;

    }//End of current Active if
    update();
}); //End of next event listner

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive =  1;

    }//End of current Active if
    
    update();

}); //End of previous event listner

function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active');
        } // End of index if
    }); //End of cicle for each loop

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length -1) / (circles.length -1)) * 100 + "%";


    if(currentActive === 1) {
        prev.disabled = true;

    } else if (currentActive == circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false
    }// End of If to activate button
}//End of update function
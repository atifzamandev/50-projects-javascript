const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');


    }) // End of event listener


}) // end of forEach

function removeActiveClasses() {

    panels.forEach(panel => {

        panel.classList.remove('active');


    }) // End of panel foreach with Zero function


} // End of removeActiveClasses
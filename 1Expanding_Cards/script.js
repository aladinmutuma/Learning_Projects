const panels = document.querySelectorAll('.panel') /*initialize some sort of an array for all the 5 elements **/
panels.forEach(panel => { /* For each is a high array method that can take a function as an argument */
panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
})
})
function removeActiveClasses() { /**function to remove the other active panels */
    panels.forEach(panel => {  /**Looping through all the panels */
        panel.classList.remove('active')
    })
}
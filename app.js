const asks = document.querySelectorAll('.ask');
const titles = document.querySelectorAll('.title');
const arrows = document.querySelectorAll('.arrow');
const resp = document.querySelectorAll('.resp');

asks.forEach((ask, i) => {
    ask.addEventListener('click', () => {
        let allQuestion = [0, 1, 2, 3, 4]
        allQuestion.forEach(element => {
            if (i !== element) {
                arrows[element].classList.remove('rotateArrow')
                resp[element].classList.remove('respActive')
                titles[element].classList.remove('fontWeight')
            } else {
                arrows[i].classList.toggle("rotateArrow");
                titles[i].classList.toggle("fontWeight");    
                resp[i].classList.toggle("respActive");
            }
        })
    })
})
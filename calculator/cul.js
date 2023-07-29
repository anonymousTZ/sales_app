const buttons = document.querySelectorAll('span')
const answer = document.querySelector('#answer')
for (let button of buttons) button.addEventListener('click',
    function() {
        console.log(button.innerText)
        answer.innerHTML = button.innerText

        if (button.innerText==='C') {
            answer.value=""
        }
        else if (button.innerText==="=") {
            answer.value=eval(answer.value)
        
        } else {
            answer.value+=button.innerText    
        }
    })
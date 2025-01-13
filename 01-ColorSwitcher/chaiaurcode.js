const button = document.querySelectorAll('.button')
const body = document.querySelector('body')
button.forEach (function (button) {
    button.addEventListener('click', function (event) {
        switch (event.target.id) {
            case 'grey': body.style.backgroundColor = event.target.id;
                break;
        
            case 'slategrey': body.style.backgroundColor = event.target.id;
                break;
        
            case 'blue': body.style.backgroundColor = event.target.id;
                break;
        
            case 'yellow': body.style.backgroundColor = event.target.id;
                break;
        
            case 'green': body.style.backgroundColor = event.target.id;
                break;
        
            case 'cyan': body.style.backgroundColor = event.target.id;
                break;
        
            case 'olive': body.style.backgroundColor = event.target.id;
                break;
        
            case 'deeppink': body.style.backgroundColor = event.target.id;
                break;
        
            case 'salmon': body.style.backgroundColor = event.target.id;
                break;
        
            case 'crimson': body.style.backgroundColor = event.target.id;
                break;
        
            case 'purple': body.style.backgroundColor = event.target.id;
                break;
        
            default:
                break;
        }
    })
})
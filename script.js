let buttons = document.querySelectorAll('button');
let inps = document.getElementById('inp');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            inps.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            inps.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            inps.value = string;
        }
        else{
            string += e.target.innerHTML;
            inps.value = string;
        }
        
    })
})
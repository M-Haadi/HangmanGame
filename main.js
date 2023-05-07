
const btnsAlpha = document.querySelectorAll('.abc');
const lettercontainer = document.querySelector('.letters-container');
const figure = document.querySelectorAll('.figure');
const resetbtn = document.querySelector('.reset-btn')
const result=document.querySelector('.result');
let figure_index=0;
let addedletter=0;
figure.forEach(elem => {
    elem.style.display = "none";
})


const words = ["Germany","england","Dubai","Italy","Pakistan","Iran","Japan","austrailia","sweden","America"];
let randno = Math.floor(Math.random() * words.length);
const eachwordlength = words[randno].length;
for (let i = 0; i < eachwordlength; i++) {

    let span_letters = document.createElement('span');
    span_letters.classList.add('letters');
    lettercontainer.insertAdjacentElement('beforeend', span_letters);
}

const span_lett = document.querySelectorAll('.letters');
btnsAlpha.forEach(btn => {
    btn.addEventListener('click', () => {
        let indexes = [];
        for (let i = 0; i < words[randno].length; i++) {

            if (btn.innerHTML.toUpperCase() == words[randno].toUpperCase().split('')[i]) {
                indexes.push(i);
                btn.style.backgroundColor = "green";
                btn.style.color = "white";
                
                addedletter++;
            
            }
            else if(btn.innerHTML.toUpperCase()!==words[randno].toUpperCase().split('')[i]){
                btn.disabled=true; 
                   
            }          
        }

        if(addedletter==0){
             if(figure_index==5){
                figure[figure_index].style.display="block";
                result.innerHTML="You've lost the Game. Reset to play again!";
                btnsAlpha.forEach(btn=>{
                    btn.disabled=true;
                    btn.style.cursor="default";
                })

                for (let i = 0; i < words[randno].length; i++) {
                    span_lett[i].innerHTML = words[randno].split('')[i];
                }  

             }
         
             else{
            figure[figure_index].style.display="block";
            figure_index++;
             }
        }
      
        else{
            addedletter=0;
        }
    

        for (let i = 0; i < indexes.length; i++) {
            span_lett[indexes[i]].innerHTML = words[randno].split('')[indexes[i]];
        }  
    })
   
})

resetbtn.addEventListener('click',()=>{

    window.location.reload();
})









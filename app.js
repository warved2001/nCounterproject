 
( function () {

    const buttons = document.querySelectorAll('.counterbutton')
    //setting the local storage retrieve
    let count= 0;
    

    buttons.forEach(function (button){
    
       button.addEventListener('click',function() {

                
            if(button.classList.contains('decr')){
                count--

            }

            else if(button.classList.contains('incr')){
                count++ 

            }

             if(button.classList.contains('reset')){
                count=0 
             }

             //setting the current value to local storage to prevent the data lose in refresh

             localStorage.setItem('count', JSON.stringify(count));

            
            const counter =  document.querySelector('#counter')
            counter.textContent =count

            

            if(count<0){
                counter.style.color='red'
            }

            if(count==0){
                counter.style.color='grey'
            }

            else if(count >0){
            
                    counter.style.color='blue'
                
            }
        })

    })
    
}) ()











   


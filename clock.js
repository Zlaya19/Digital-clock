const output = document.getElementById('output');

let digit1 = 0;
let digit2 = 0;
let digit3 = 0;

//  the event listener starts a function by loading the page

window.addEventListener('load', function(){
    // the setInterval function starts the clockDate function after every 1000 milisoconds
    setInterval(clockDate, 1000);

    /*   
        The clockDate function uses the dateConstructor in the clock variable and so we have
        Access to the current date with methods like getMinutes, getSeconds etc ...
    */
        function clockDate(){
            let clock = new Date();
            let seconds = clock.getSeconds();
            let minutes = clock.getMinutes();
            let hours = clock.getHours();

            if(seconds < 10){
                digit1 = '0' + clock.getSeconds().toString();
            }else{
                digit1 = seconds;
            }
            if(minutes < 10){
                digit2 = '0' + clock.getMinutes().toString();
            }else{
                digit2 = minutes;
            }
            if(hours < 10){
                digit3 = '0' + clock.getHours().toString();
            }else{
                digit3 = hours;
            }

            //  at the end, we just displays the current time how we like to do it

        output.innerHTML = '<h1>' + digit3 + ':' + digit2 + ':' + digit1 + '</h1>';
        }
    
});
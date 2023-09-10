const hrEl= document.getElementById('hours');
const minEl= document.getElementById('minutes');
const secEl= document.getElementById('seconds');
const miliSecEl= document.getElementById('miliseconds');
const gmtEl= document.querySelector('.GMT');


//a funtion to tell current time
function tellTime(){
    //this to get the current hour and store it in the variable hr
    let hr = new Date().getHours();
    //this to get the current min 
    let min = new Date().getMinutes();
    //seconds  
    let sec = new Date().getSeconds();
    //for miliseconds
    let mili = new Date().getMilliseconds();
    //for am-pm
    let gmt ='AM';
    if (hr < 12 ){
        hr = hr - 12;
        gmt = 'AM';
    } else{
        gmt= "PM";
    }

    //for double digits in hours
    if(hr < 10){
      hr= "0" + hr;
    }else{
       hr=hr;
    }
    //double digits in mins
    if(min < 10){
       min=  "0" + min;
    }else{
       min=min;
    }

    if(sec < 10){
      sec= "0" +sec;
    }else{
       sec=sec;
    }


  //code below inserts the value respectively to each span id text on the website//
    hrEl.innerText = hr;
    minEl.innerText = min;
    secEl.innerText = sec;
    miliSecEl.innerText = mili;
    gmtEl.innerText = gmt;

    // this code makes an infinite loops for the seconds and return the answer to the website and its will work so far as the tellTime() funciton is in it //
    setTimeout(()=>{
        tellTime()
    },1)

}

tellTime()
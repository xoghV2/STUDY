



// darkmodeBackgroundColor.addEventListener('',colorChange);

class darkMode{
    static darkmodeValue = null;
    static darkmodeList = JSON.parse(localStorage.getItem(`darkmodeList`))??[];

getValue (){
     
     if (x !== 'day'){
        
     }else{

     }
    }


changeColor(){
    if(document.querySelectorAll('button').value === 'day'){
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('.darkmode_text').style.color='white';
        // document.getElementById('#white').style.display='none';
        
    }else{
        document.querySelector('body').style.backgroundColor ='black';
         document.querySelector('.darkmode_text').style.color='white';
        //  document.getElementById('#night').style.display='none';
        
    }
   
}




changeText(){
    if (document.querySelector('.darkmode_btn').value ==='day'){
        document.querySelector('.darkmode_text p').innerText ='불 켜줘';
    }else{
        document.querySelector('.darkmode_text p').innerText ='불 꺼줘';
    }
}
    
}


//         function changeBgColor(){
//            document.getElementByClassName(".darkmode_bgcolor").style.backgroundColor = "#333333";
//         }

//         darkmodeText.addEventListener('mouseover',changeMouseOver());


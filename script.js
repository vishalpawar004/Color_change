

const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");
const h1=document.querySelector("h1");
const h2=document.querySelector("h2");
buttons.forEach(function(button){
   
    button.addEventListener('click',function(e){
         h1.style.display='block';
          h2.style.display='none';
        if(e.target.id =='red'){
            h1.style.color='white';
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id =='black'){
            h1.style.color='white';
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id =='blue'){
            h1.style.color='white';
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id =='green'){
            body.style.backgroundColor= e.target.id;
            
        }
        if(e.target.id =='yellow'){
            h1.style.color='black';
            body.style.backgroundColor= e.target.id;
            
        }
        if(e.target.id =='pink'){
            h1.style.color='black';
            body.style.backgroundColor= e.target.id;
        }
    })
});
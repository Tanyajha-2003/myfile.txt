var percent= document.querySelector('.percentage');
var count=0;
var per=0;
var percentage=setInterval(animate,100);
function animate(){
    if(count==100 && per==100){
        clearInterval(percentage);
    }
    else{
        per=per+1;
        count=count+1;
        percent.textContent=count +'%';
    }
}
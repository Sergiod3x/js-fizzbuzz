var output = document.getElementById('out');
var num = 0;

for (var i = 1; i < 101; i++) {
    if(((i%5)==0)&&((i%3)==0)){
        num =  "FizzBuzz <br>"  ;
    }else{
        if ((i%5)==0){
            num =  "Buzz <br>"  ;
        } else{
            if((i%3)==0){
                num =  "Fizz <br>"  ;
            } else {
                num = i +"<br>";
            }
        }
    }
    output.innerHTML +=  num ;
}




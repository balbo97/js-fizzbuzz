//STAMPO I NUMERI DA 1 A 100
for (let i=1; i<=100; i++){
    
    //MULTIPLI DI 3 & 5
    if(i%15 == 0){
        console.log('FizzBuzz')
    }
    //MULTIPLI DI 3
    else if(i%3 == 0){
        console.log('Fizz')
    }
    // MULTIPLI DI 5
    else if(i%5 == 0){
        console.log('Buzz')
    }
    else{
        console.log(i)
    }
    
}
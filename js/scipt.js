const list = document.querySelector('ul');

//STAMPO I NUMERI DA 1 A 100
for (let i=1; i<=100; i++){
    
    //MULTIPLI DI 3 & 5
    if(i%15 == 0){
        console.log('FizzBuzz')
        let a = `<a href="#" class="list-group-item list-group-item-action list-group-item-warning">${'FizzBuzz'}</a>`
        list.innerHTML += a
    }
    //MULTIPLI DI 3
    else if(i%3 == 0){
        console.log('Fizz')
        let a = `<a href="#" class="list-group-item list-group-item-action list-group-item-success">${'Fizz'}</a>`
        list.innerHTML += a
    }
    // MULTIPLI DI 5
    else if(i%5 == 0){
        console.log('Buzz')
        let a = `<a href="#" class="list-group-item list-group-item-action list-group-item-danger">${'Buzz'}</a>`
        list.innerHTML += a
    }
    else{
        console.log(i)
        let a = `<a href="#" class="list-group-item list-group-item-action list-group-item-primary">${i}</a>`
        list.innerHTML += a

    }

    
    
}


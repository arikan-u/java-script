// numbers divisible by 2 = "yu"
// numbers divisible by 3 = "gi"
// numbers divisible by 5 = "oh"

var i;

function division(num) {

    let newArr = [];

    for (let i=1; i<=num; i++) {
        // numbers divisible by 2
        if ( i % 2 === 0 && i % 3 !== 0 && i % 5 !== 0) {
            newArr.push("yu"); 
            // numbers divisible by 3 
        } else if (i % 2 !== 0 && i % 3 === 0 && i % 5 !== 0) {
            newArr.push("gi"); 
            //numbers divisible by 5
    } else if (i % 2 !== 0 && i % 3 !== 0 && i % 5 === 0) {
            newArr.push("oh"); 
            //numbers divisible by 2 & 3 
    } else if ( i % 2 === 0 && i % 3 === 0 && i % 5 !== 0) {
           newArr.push("yu-gi"); 
           //cnumbers divisible by 2 & 5
        } else if ( i % 2 === 0 && i % 3 !== 0 && i % 5 === 0) {
           newArr.push("yu-oh");  
           //numbers divisible by 3 & 5
        } else if ( i % 2 !== 0 && i % 3 === 0 && i % 5 === 0) {
            newArr.push("gi-oh");
            //numbers divisible by 2 , 3  & 5    
        } else if ( i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            newArr.push("yu-gi-oh");
            //numbers not divisible by 2 , 3  & 5  
        } else{ 
            newArr.push(i);
        }
    };
    console.log(newArr)
   return newArr;
}
division(100);
division(20);

const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// FOR EACH

const newArray=[]

numbers.forEach( num => {
    const numPlusOne = ++num
    newArray.push(numPlusOne)
    // console.log(numPlusOne);
})
console.log(newArray);

// FOR

const newArray2 = []

for( let i = 0;i < numbers.length;i++){
    number = numbers[i]
    newArray2.push(++number)
}
console.log(newArray2);


// MAP

const newArray3 = numbers.map(num=>{
    return ++num
})
console.log(newArray3);

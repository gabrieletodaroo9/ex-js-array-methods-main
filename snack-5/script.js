const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// FOR EACH 

evenNum = []

nums.forEach(num => {
    if (num % 2 === 0) {
        evenNum.push(num)
    }
})
console.log(evenNum);


// FOR 

evenNum2 = []

for (i = 0; i < nums.length; i++) {
     const num = nums[i]
    if (num % 2 === 0) {
        evenNum2.push(num)
    }
}
console.log(evenNum2);

// FILTER

const evenNum3 = nums.filter(num=> {
    if(num % 2 === 0 ){
        return true
    }
})

// const evenNum3 = nums.filter(num => num % 2 === 0)

console.log(evenNum3);

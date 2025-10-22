const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

// FOR EACH 

const longZucchine =[]
const restZucchine = []

zucchine.forEach(zucchina => {
if ( zucchina.length > 15 ) {
longZucchine.push(zucchina)
} else{
  restZucchine.push(zucchina)
}
})
console.log(longZucchine, restZucchine);


// FOR 

const longZucchine2 = []
const restZucchine2 = []

for( i = 0; i < zucchine.length; i++) {
  const zucchina = zucchine[i]
  if ( zucchina.length > 15 ){
    longZucchine2.push(zucchina)
  }else {
    restZucchine2.push(zucchina)
  }
}

console.log(longZucchine2, restZucchine2);

// FILTER

const longZucchine3 = zucchine.filter(zucchina =>{
  return zucchina.length > 15
})
const restZucchine3 = zucchine.filter(zucchina => {
  return zucchina.length <= 15
})
console.log(longZucchine3,restZucchine3);

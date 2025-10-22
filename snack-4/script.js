const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

// FOR EACH

const authorArray = []

posts.forEach(post=>{
authorArray.push(post.author)


})
console.log(authorArray);

// FOR 

const authorArray2 = []

for(i = 0; i < posts.length; i++){
  const post = posts[i]
  authorArray2.push(post["author"])
}
console.log(authorArray2);



// MAP

const authorArray3 = posts.map(post =>{
  return post.author
})
console.log(authorArray3);


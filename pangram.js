//  console.log(pangram("The quick brown fox jumps over the lazy dog"));

const f = "The quick brown fox jumps over the lazy dog"

pangram(f)

function pangram(f){
  
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','i','v','w','x','y','z']

  var isPangram = true; 

  alphabet.forEach((letter) => {
    if(!f.toLowerCase().includes(letter)){
      isPangram = false
    }
  })

  if(isPangram){
    console.log("Pangram")
    return
  }

  console.log("Not Pangram")
  return
} 
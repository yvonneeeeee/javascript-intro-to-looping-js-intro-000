function forLoop(array){
  for ( let i = 0  ; i < 25 ; i+=1){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    }else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}


function whileLoop(n){
    let i = n;
    while (i >0){
      console.log(i--);
    }
    return 'done'
}



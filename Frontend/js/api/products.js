const uri = "http://localhost:4000/products/"
const getProducts = async()=>{
   const result =  fetch(uri)
    .then(res => res.json())
    .then(data => data)
    .catch(rejected => {
        console.log(rejected);
    }); 
    return result
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export {getProducts,shuffle}